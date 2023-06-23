/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

/*
 * Ce composant sert de composant de base pour tout composant dérivé (composant parent de Popup) devant faire apparaître une fenêtre popup : pour les menus, les popups contextuels, les selects...
 *
 * Un seul Popup ne peut être ouvert à la fois : l'ouverture d'un Popup entraîne la fermeture automatique d'un autre Popup ouvert.
 *
 * Le Popup doit explicitement avoir une référence objet ref obtenue par useRef.
 * Le Popup expose les trois méthodes suivantes :
 *
 *  - toggle(ev) : appelée généralement en réponse à un clic sur un menu. Ouvre le popup courant s'il est fermé après avoir
 *                 fermé le popup déjà ouvert s'il existe. Ferme le popup courant s'il est ouvert.
 *  - isOpen(): retourne true si le popup courant est ouvert, sinon retourne false.
 *  - close() : ferme le popup courant.
 *
 * Tous les childs d'un Popup seront englobés dans un div ayant pour classe 'sl-popup-00'.
 * La propriété className permet cependant d'ajouter une classe personnalisée si nécessaire.
 * La propriété stateChanged (facultative) référence une fonction qui sera appelée à chaque changement d'état (ouvert ou fermé) du Popup avec pour paramètre la valeur true si le Popup vient d'être ouvert et false s'il vient d'être fermé'.
 */

import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'

import './sl-base.css'

/* lastOpened:  référence le dernier popup ouvert s'il existe, sinon (aucun Popup n'est ouvert) prend la valeur null. */
let lastOpened = null //

/* onClickOutsidePopup(ev): eventListener appelé lors d'un click sur le document */
const onClickOutsidePopup = (e) => {
    const el = e.target.closest('.sl-popup-00')
    if (el === null) {
        // le clic s'est produit en dehors du Popup.
        if (lastOpened) {
            lastOpened.close()
        }
    }
}

const Popup = forwardRef((props, ref) => {
    const popupRef = useRef(null)

    useEffect(() => {
        ref.current._isOpen = false // initialement, le Popup est marqué comme fermé.
        return () => {
            if (lastOpened) {
                //lastOpened.close() => ne marche pas : ref.current plus accessible (=null)
                document.removeEventListener('click', onClickOutsidePopup)
                lastOpened = null
            }
        }
    }, [ref])

    const setOpen = (b) => {
        ref.current._isOpen = b
        if (b) {
            document.addEventListener('click', onClickOutsidePopup)
            lastOpened = ref.current
        } else {
            document.removeEventListener('click', onClickOutsidePopup)
            lastOpened = null
        }
        if (b) popupRef.current.classList.add('open')
        // le wrapper global de Popup est marqué avec la classe 'open'
        else popupRef.current.classList.remove('open') // le wrapper global de Popup n'est plus marqué avec la classe 'open'
        if (props.stateChanged) props.stateChanged(b)
    }

    const classname = props.className
        ? `sl-popup-00 ${props.className}`
        : `sl-popup-00`

    const toggle = (ev) => {
        if (ev) ev.stopPropagation()

        if (lastOpened && ref.current !== lastOpened) {
            lastOpened.close()
        }
        if (ref.current._isOpen) {
            close()
        } else {
            setOpen(true)
        }
    }

    const close = () => {
        if (!ref.current?._isOpen) return
        setOpen(false)
    }

    const isOpen = () => ref.current._isOpen

    useImperativeHandle(ref, () => ({
        toggle,
        isOpen,
        close,
    }))

    return (
        <div ref={popupRef} className="sl-popup-00-wrapper">
            <div className="sl-popup-00-absolute-wrapper">
                <div ref={ref} className={classname}>
                    {props.children}
                </div>
            </div>
        </div>
    )
})

export default Popup
