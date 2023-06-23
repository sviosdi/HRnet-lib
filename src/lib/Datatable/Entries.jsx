/* eslint-disable react/prop-types */
import Select from '../sl-base/Select'

/* Composant permettant grâce à un Select de sélectionner le nombre d'entrées à afficher par page
 * propriétés:
 *      entries: tableau des valeurs options du Select
 *      updateNbPages: la fonction à exécuter lors de la sélection d'une option du Select */
const Entries = ({ entries, updateNbPages }) => {
    return (
        <div className="entries">
            Show
            <Select
                options={entries}
                onSelect={(value) => updateNbPages(value)}
            />
            entries
        </div>
    )
}

export default Entries
