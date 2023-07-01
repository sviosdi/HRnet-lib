/* eslint-disable react/prop-types */
import React from 'react'
import { Datatable, Form, Submit } from './lib/index'
import SingleModal from './SingleModal.jsx'
import { useState, useRef } from 'react'
import model from './data/DataTableModel.js'

import './App.css'

const App = ({ data: initial_data = [] }) => {
    model.buttons = null // annuler l'affichage du bouton d'édition d'une entrée s'il est présent dans le modèle
    const [codepage, setCodepage] = useState(0)
    const [data, setData] = React.useState(initial_data)
    const modalRef = useRef(null)
    const formRef = useRef(null)
    const event = new Event('datatableSubmitted')

    const onSubmit = (entry) => {
        const updated_data = [...data, entry]
        setData(updated_data)
        /*  console.log('localstorage update - hrnet')
        //localStorage.setItem(model.id, JSON.stringify(updated_data))
        */
        console.log('enregistrement dans le localStorage')
        localStorage.setItem(model.id, JSON.stringify(updated_data))
        document.dispatchEvent(event)
        formRef.current.clear()
        modalRef.current.toggleModal()
    }

    return (
        <>
            <SingleModal ref={modalRef}>Employee created!</SingleModal>
            <header>
                <section>
                    <img width="80" height="80" src="hrnet.webp"></img>
                    <h1>HRnet</h1>
                </section>
            </header>
            <main>
                <section id="navbar">
                    <div
                        className={
                            codepage === 0 ? 'menuitem active' : 'menuitem'
                        }
                        onClick={() => {
                            setCodepage(0)
                        }}
                    >
                        <span>Create Employee</span>
                    </div>
                    <div
                        className={
                            codepage === 1 ? 'menuitem active' : 'menuitem'
                        }
                        onClick={() => {
                            setCodepage(1)
                        }}
                    >
                        <span>View Current Employees</span>
                    </div>
                </section>
                <section id="hrnet-content">
                    <section
                        style={{ display: codepage === 0 ? 'flex' : 'none' }}
                        className="content-layout"
                        id="create-form"
                    >
                        <div className="content-wrapper">
                            <Form
                                ref={formRef}
                                model={model}
                                embedded={false}
                                /*onFormSubmitted={onFormSubmitted}*/
                                title="New Employee"
                                reset="Clear"
                                labelSubmit="Save"
                            />
                            <Submit formRef={formRef} onSubmit={onSubmit} />
                        </div>
                    </section>

                    <section
                        style={{ display: codepage === 1 ? 'flex' : 'none' }}
                        className="content-layout"
                        id="table-display"
                    >
                        <div className="content-wrapper">
                            <h2>Employee List</h2>
                            <Datatable model={model} data={data} externalForm />
                        </div>
                    </section>
                </section>
            </main>
            <footer>Wealth Health - Human Resource Department </footer>
        </>
    )
}

export default App
