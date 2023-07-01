/* eslint-disable react/prop-types */
/*
    Ce composant permet la soumission du formulaire dont une forwardRef est passée par la propriété formRef et 
    permet aussi éventuellement l'affichage d'un bouton pour nettoyer le formulaire.
    props:
    formRef: [obligatoire] forwardRef vers le formulaire
    onSubmit: [nécessaire] - une fonction appelée à la soumission du formulaire avec pour paramètre l'objet
                                 correspondant aux champs du formulaire.
    labelSubmit : [facultatif - 'Save' par défaut] - le label du bouton de soumission du formulaire
    reset : [facultatif] boolean - si présent alors un bouton pour nettoyer le formulaire est ajouté.
    labelReset : [facultatif - 'Clear' par défaut] label pour le bouton pour nettoyer le formulaire si présence 
                                                   de reset
    embedded : [facultatif] boolean - si présent, indique si le composant est intégré à une modale. 

*/
const Submit = ({
    formRef,
    onSubmit,
    embedded,
    labelSubmit = 'Save',
    reset,
    labelReset = 'Clear',
}) => {
    const handleSubmit = () => {
        const entry = formRef.current.getData()
        if (onSubmit) onSubmit(entry)
    }

    const handleReset = () => {
        formRef.current.clear()
    }

    return (
        <div
            className={
                embedded ? 'sl-modal-footer' : 'datatableform-submission'
            }
        >
            {reset && (
                <button
                    onClick={handleReset}
                    className="cfsb-clear"
                    tabIndex={0}
                >
                    {labelReset}
                </button>
            )}
            <button
                // Attention ! = onClick={formRef.current.getData} ne fonctionne pas :
                onClick={handleSubmit}
                //
                className="cfsb-save"
                tabIndex={0}
            >
                {labelSubmit}
            </button>
        </div>
    )
}

export default Submit
