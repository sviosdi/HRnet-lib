/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import { forwardRef, useImperativeHandle } from 'react'
import './Modal.css'
import Submit from './Submit'
import Form from './Form'

/*
    Ce composant crée la modale (ainsi que le bouton qui la déclenche) qui permet d'afficher un formulaire 
    permettant l'édition d'une entrée conformément au 'model' de la Datatable.
    Ce composant expose par forwardRef les deux fonctions suivantes :
        - clear() : nettoye le formulaire 
        - toggle() : toggle la modale.
    props:
        model: [obligatoire] - le 'model' de la Datatable.
        label: [obligatoire] - le label du bouton qui ouvre la modale. 
        title: [facultatif]  - le titre à afficher dans l'entête de la modale.
        onSubmit: [nécessaire] - une fonction appelée à la soumission du formulaire avec pour paramètre l'objet
                                 correspondant aux champs du formulaire.
        labelSubmit : [facultatif - 'Save' par défaut] - le label du bouton de soumission du formulaire
        reset : [facultatif] boolean - si présent alors un bouton pour nettoyer le formulaire est ajouté.
        labelReset : [facultatif - 'Clear' par défaut] label pour le bouton pour nettoyer le formulaire si présence 
                                                   de reset

*/

const Modal = forwardRef(
    (
        { model, label, title = '', onSubmit, labelSubmit, reset, labelReset },
        modalRef
    ) => {
        /* const [opened, setOpened] = React.useState(false)*/
        const slModalWrapper = React.useRef(null)
        const formRef = React.useRef(null)
        useImperativeHandle(modalRef, () => ({
            toggle,
            clear,
        }))

        const toggle = () => {
            if (!slModalWrapper.current.classList.contains('opened')) {
                slModalWrapper.current.classList.add('opened')
                /*slModalWrapper.current.firstChild.lastChild.focus()*/
            } else {
                slModalWrapper.current.classList.remove('opened')
            }
        }

        const clear = () => {
            formRef.current.clear()
        }

        return (
            <>
                <div ref={slModalWrapper} className="sl-modal-wrapper">
                    <div className="sl-modal">
                        <div className="sl-modal-header">
                            <div>{title}</div>
                            <div
                                className="sl-modal-close-btn"
                                onClick={toggle}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 22.457 22.457"
                                >
                                    <path
                                        id="close-btn"
                                        d="M122.232,46.019l6.621-6.621a2.7,2.7,0,1,0-3.817-3.817L118.415,42.2l-6.621-6.621a2.7,2.7,0,0,0-3.817,3.817l6.621,6.621-6.621,6.621a2.7,2.7,0,0,0,3.817,3.817l6.621-6.621,6.621,6.621a2.7,2.7,0,0,0,3.817-3.817Z"
                                        transform="translate(-107.186 -34.791)"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="sl-modal-content">
                            <Form model={model} ref={formRef} />
                        </div>
                        <Submit
                            formRef={formRef}
                            modalRef={modalRef}
                            onSubmit={onSubmit}
                            embedded
                            labelSubmit={labelSubmit}
                            reset={reset}
                            labelReset={labelReset}
                        />
                    </div>
                </div>

                <button className="cfsb-save" onClick={toggle}>
                    {label}
                </button>
            </>
        )
    }
)
export default Modal
