/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/*
  Ce composant génère le formulaire associé à une Datatable à partir du 'model' de la Datatable passé en props.
  Attention: Ce composant ne gère pas la soumission du formulaire, mais il expose les deux fonctions suivantes
             accessibles par forwardRef :
                - getData() pour respectivement récupérer un objet correspondant aux champs du formulaire
                - clear() pour nettoyer les champs du formulaire

  props:
    model [obligatoire]: le modèle de la dataTable.
    title [facultatif]: un titre pour le formulaire affiché en entête 
    className [falcultatif]: un nom de classe pour le div englobant tout le formulaire                     
*/

import { Fragment, forwardRef, useImperativeHandle } from 'react'
import Select from '../sl-base/Select'
import './Form.css'

const Form = forwardRef(({ model, title, className }, formRef) => {
    useImperativeHandle(formRef, () => ({
        getData,
        clear,
    }))

    className = className ? `datatableform ${className}` : 'datatableform'

    /* 
        Cette fonction génère le champ d'édition du formulaire de création d'une entrée,
        ce champ correspondant au header hd du 'model'
        Le paramètre idx est utilisé comme key. 
    */
    const getInputs = (hd, idx) => {
        if (
            hd.input === 'text' ||
            hd.input === 'date' ||
            hd.input === 'number'
        ) {
            return (
                <Fragment key={idx}>
                    <label htmlFor={hd.field}>{hd.title}</label>
                    <input type={hd.input} id={hd.field} name={hd.field} />
                </Fragment>
            )
        } else if (hd.input === 'Select') {
            return (
                <Fragment key={idx}>
                    <label>{hd.title}</label>
                    <Select
                        options={hd.options}
                        name={hd.field}
                        id={`${model.id}-${hd.field}`}
                        selected={hd.selected}
                        height={27}
                    />
                </Fragment>
            )
        } else if (hd.input === 'fieldset') {
            return (
                <fieldset key={idx} className="datatable-modal-fieldset">
                    <legend>{hd.title}</legend>
                    {hd.content.map((se, sidx) => getInputs(se, sidx))}
                </fieldset>
            )
        }
    }

    /*
        Cette fonction supprime le contenu de tous les champs d'édition du formulaire
    */
    const clear = () => {
        const form = document.querySelector(`#${model.id}`)
        const allnames = form.querySelectorAll('[name]')
        const selectnames = form.querySelectorAll('[data-name]')

        allnames.forEach((e) => {
            e.value = ''
        })
        selectnames.forEach((e) => {
            document.getElementById(e.id).setSelected(0)
        })
    }

    /*
        Cette fonction retourne l'objet correspondant à l'entrée 'entry' éditée par le formulaire et 
        dont les champs sont donc ceux fournis par le 'model'
    */
    const getData = () => {
        const form = document.querySelector(`#${model.id}`)
        const allnames = form.querySelectorAll('[name]')
        const selectnames = form.querySelectorAll('[data-name]')
        const entry = {}
        allnames.forEach((e) => {
            entry[e.getAttribute('name')] = e.value
        })
        selectnames.forEach((e) => {
            entry[e.dataset.name] = e.dataset.value
        })

        return entry
    }

    return (
        <div className={className}>
            {title && <h2>{title}</h2>}
            <form className="form-create" id={model.id}>
                {model.headers.map((hd, iddx) => getInputs(hd, iddx))}
            </form>
        </div>
    )
})

export default Form
