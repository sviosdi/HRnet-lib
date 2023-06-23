/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'
import './sl-base.css'
import ArrowDown from '../assets/img/ArrowDown'
import Popup from './Popup'

/*
 * props : options : ["LabelAsValue", ...] ou [["label", "value", [svg]], ..... ] - obligatoire : svg facultatif : icône svg
 *         selected : "2" (ou {2}) : la troisième option est sélectionnée à l'initialisation [0 est la première] - optionnel
 *         onSelect : une fonction de paramètres ("value", id) appelée lors de la sélection d'une option - optionnel
 *         name,id : optionnels - ajoutés au div englobant .sl-select-00
 *                   name : utile si Select ajouté à un formulaire, permet d'ajouter aux données récupérées par le formulaire
 *                          la valeur sélectionnée. (dans l'objet formData passé en paramètre à onSubmit() du formulaire)
 *         className : optionnel - ajouté à la classe .sl-select-00 si présent
 *         height: optionnel - la hauteur de l'entête du Select.
 */

const Select = ({
    options: items,
    selected: choosen,
    onSelect,
    name,
    id,
    className,
    height = '26px',
}) => {
    const [selected, setSelected] = useState(choosen ? choosen : '0')
    const select = useRef(null)
    const selectMenu = useRef(null)
    const [widthSet, setWidthSet] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => {
        //  console.log('useEffect widthset', widthSet)
        if (widthSet) return

        const head = select.current.firstChild
        const menu = select.current.lastChild.firstChild.firstChild
        //  const menu = select.current.querySelector('.sl-popup-00')
        if (menu.offsetWidth !== 0) {
            const w = menu.offsetWidth + 15
            menu.style.width = w + 6 + 'px'
            head.style.width = w + 'px'
            setWidthSet(true)
        }
    })

    React.useEffect(() => {
        select.current.setSelected = setSelected
        if (name) {
            select.current.setAttribute('data-name', name)
            const first = choosen ? choosen : '0'
            updateSelected(first)
            /* remplacer la ligne précédente par le code ci-dessous si on ne veut pas appliquer onSelect() à l'initialisation */
            /* if (items.length !== 0 && typeof items[0] === 'object') {
                select.current.setAttribute('data-value', items[first][1])
            } else {
                select.current.setAttribute('data-value', items[first])
            }*/
        }
        if (id) select.current.setAttribute('id', id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, id])

    let labels = []
    let svgs = []
    if (items.length !== 0 && typeof items[0] === 'object') {
        labels = items.map((e) => e[0])
        svgs = items.map((e) => e[2])
    } else {
        labels = items
    }

    const classname = className ? `sl-select-00 ${className}` : 'sl-select-00'

    const updateSelected = (idx) => {
        if (items.length === 0) return
        if (typeof items[0] === 'object') {
            select.current.setAttribute('data-value', items[idx][1])
            if (onSelect) onSelect(items[idx][1], idx)
        } else {
            select.current.setAttribute('data-value', items[idx])
            if (onSelect) onSelect(items[idx], idx)
        }
    }

    const handleMenuSelection = (ev) => {
        const idx = ev.target.dataset.value
        setSelected(idx)
        selectMenu.current.toggle(ev)
        updateSelected(idx)
    }

    const getItem = (item, idx) => {
        if (svgs[idx])
            return (
                <>
                    {svgs[idx]()} &nbsp;{item}
                </>
            )
        else return item
    }

    return (
        <div ref={select} className={classname} id={id}>
            <div
                style={height && { height: height }}
                onClick={(ev) => selectMenu.current.toggle(ev)}
                tabIndex={0}
            >
                <span>{getItem(labels[selected], Number(selected))}</span>
                <span>
                    <ArrowDown />
                </span>
            </div>
            <Popup
                stateChanged={(s) => {
                    if (s) select.current.classList.add('open')
                    else select.current.classList.remove('open')
                }}
                ref={selectMenu}
            >
                {labels.map((item, idx) => (
                    <div
                        style={height && { height: height }}
                        key={idx}
                        data-value={idx}
                        onClick={handleMenuSelection}
                    >
                        {getItem(item, idx)}
                    </div>
                ))}
            </Popup>
        </div>
    )
}

export default Select
