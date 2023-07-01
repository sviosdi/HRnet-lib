/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'
import Entries from './Entries'
import Search from './Search'
import './Datatable.css'
import EntriesPages from './EntriesPages'
import Modal from './Modal'

const Datatable = ({ model, data: initial_data = [], externalForm }) => {
    const nbEntries = model.entries ? model.entries[0] : model.nbEntries
    /* Début STATE */
    const [data, setData] = useState(initial_data)
    const [dataToUse, setDataToUse] = useState(initial_data)
    const [currentData, setCurrentData] = useState([])
    const [sortBy, setSortBy] = useState(model.sortCol)
    const [descending, setDescending] = useState(!model.ascending)
    const [page, setPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(nbEntries)
    const [searching, setSearching] = useState(false)
    /* Fin STATE */

    const searchRef = useRef(null)
    const modalRef = useRef(null)

    /* 
        Dans le cas où le formulaire est n'est pas généré par la dataTable (présence de la prop. externalForm) et 
        que l'utilisateur édite une nouvelle entrée alors qu'une recherche est en cours, il faut pouvoir purger
        le champ de recherche après soumission du formulaire. Dans ce cas on créera un événement personnalisé 
        'datatableSubmitted' émis par document.dispatchEvent(event) lors de la soumission du formulaire externe.
        On ajoutera alors un eventListener pour cet événement personnalisé dans le useEffect() suivant :
    */
    React.useEffect(() => {
        //console.log('useEffect once')
        const endSearching = () => {
            setSearching(false) // marquer la recherche comme non active
            searchRef.current.clear() // purger le champ de recherche
        }
        if (externalForm) {
            document.addEventListener('datatableSubmitted', endSearching, false)
        }
        return () => {
            if (externalForm)
                document.removeEventListener(
                    'datatableSubmitted',
                    endSearching,
                    false
                )
        }
    }, [])

    /*
        Dans le cas où le formulaire est n'est pas généré par la dataTable (présence de la prop. externalForm)
        il faut alors mettre à jour le state data et dataToUse avec la valeur passée en propriété ( qui est un
        state géré extérieurement) à chaque changement de cette dernière.
    */
    /* -- !standalone -- */
    React.useEffect(() => {
        //console.log('useEffect de modif des datas - !standalone')
        if (externalForm) {
            setDataToUse(initial_data)
            setData(initial_data)
        }
    }, [initial_data])

    /* 
        Dans le cas où la prop. externarForm n'est pas présente (ou a pour valeur false), c'est la Datatable
        qui gère le state data. Lorsque ce dernier change (ajout d'une nouvelle entrée) il faut mettre à jour 
        dataToUse en conséquence.
    */
    /* -- standalone -- */
    React.useEffect(() => {
        //console.log('useEffect de modif des datas --standalone--')
        if (!externalForm) setDataToUse(data)
    }, [data])

    /*
        Dans le cas où un tri est actif sur une colonne (sortBy !== null) : si une modification des données
        dataToUse a lieu, ou si un nouvelle colonne est triée ou encore si le 'sens' de tri de la colonne triée 
        change, il faut alors trier à nouveau les données dataToUse.
    */
    React.useEffect(() => {
        //console.log('useEffect de tri')
        if (sortBy !== null) {
            _sort(dataToUse, sortBy, descending) // modifie dataToUse sans mettre à jour le state
        }
    }, [dataToUse, descending, sortBy])

    /* Filtre les entrées de data pour ne conserver que celles à afficher */
    React.useEffect(() => {
        //console.log('useEffect pour dataToUse filtre affichage')
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = Math.min(dataToUse.length, page * itemsPerPage)

        setCurrentData(
            //dataToUse.filter((e, idx) => idx >= startIndex && idx < endIndex)
            dataToUse.slice(startIndex, endIndex)
        )
    }, [dataToUse, page, itemsPerPage, sortBy, descending])

    /* Trie la colonne col du tableau _data dans l'ordre indiqué par desc.
     * _data est modifié. (tri 'in place')
     * Les valeurs des champs de la colonne sont convertis dans leur type avant la comparaison */
    const _sort = (_data, col, desc) => {
        //const newData = data.slice()
        return _data.sort((a, b) => {
            const field = model.flatHeaders[col].field
            const type = model.flatHeaders[col].type
            let v1 = a[field]
            let v2 = b[field]
            switch (type) {
                case 'number':
                    v1 = Number(v1)
                    v2 = Number(v2)
                    break
                case 'date':
                    v1 = Date.parse(v1)
                    v2 = Date.parse(v2)
                    break
            }
            if (v1 === v2) {
                return 0
            }
            return desc ? (v1 < v2 ? 1 : -1) : v1 > v2 ? 1 : -1
        })
    }

    /* Fonction appelée lors d'un click sur une entête de colonne.
     * Trie la colonne col du tableau _data dans l'ordre inverse de l'ordre actuel indiqué par descending,
     * puis repositionne l'affichage des entrées sur la première page.
     * _data est modifié. */
    const sort = (_data, col) => {
        const desc = col === sortBy && !descending
        setDescending(() => desc)
        setSortBy(col)
        setDataToUse(_sort(_data.slice(), col, desc))
        setPage(1)
    }

    /* Cette fonction recalcule la page courante quand le nombre d'entrées nbItems change */
    const updateNbPages = (nbItems) => {
        const nb = (page - 1) * itemsPerPage
        setItemsPerPage(nbItems)
        setPage(Math.floor(nb / nbItems) + 1)
    }

    /* Cette fonction formate la valeur d'une entrée e des data se trouvant dans la colonne de header hd
     * Le format se fait ici uniquement sur les dates, qui sont de la forme : "mm/jj/aaaa" dans les données
     * mais formatées en jj//mm/aaaa.
     * Les valeurs formatées sont utilisées dans l'affichage et dans la recherche */
    const format = (e, hd) => {
        if (hd.type === 'date') {
            return new Date(Date.parse(e[hd.field])).toLocaleDateString()
        } else return e[hd.field]
    }

    /* Cette fonction filtre les données à chaque modification des valeurs dans le champ de recherche
     * On commence par former un tableau des mots à chercher */
    const searchFilter = (ev) => {
        if (ev.target.value === '') {
            setSearching(false)
            setDataToUse(data)
        } else {
            if (!searching) setSearching(true)
        }

        const mots = ev.target.value.split(' ')

        const result = data.filter((e) => {
            for (let mot of mots.filter((m) => m !== '')) {
                // pour chacun des mots de la recherche, rechercher le mot dans chacun des champs d'une ligne
                let found = false
                for (let hd of model.flatHeaders) {
                    // pour chacun des champs de la ligne
                    if (
                        format(e, hd).toLowerCase().includes(mot.toLowerCase())
                    ) {
                        found = true
                        break
                    }
                }
                if (!found) return false
                // ici le mot a été trouvé dans la ligne, on peut passer au mot suivant
            }
            return true
        })
        // on trie les résultats si nécessaire
        if (sortBy !== null) {
            _sort(result, sortBy, descending)
        }
        setDataToUse(result)
        setPage(1)
    }

    /* Cette fonction affiche les boutons passés par le modèle.
     * Seul le bouton de type 'new' (création d'une nouvelle entrée) est pris en charge
     * pour le moment : c'est un bouton qui ouvre une Modal dont le contenu est un formulaire
     * généré à partir des headers du modèle par la fonction getInputs.
     * Le paramètre idx est utilisée comme key. */
    const getButtons = (b, idx) => {
        if (b.type === 'new') {
            return (
                <Modal
                    ref={modalRef}
                    model={model}
                    actionLabel="Save"
                    onSubmit={(entry) => {
                        //console.log('submitting for standalone')
                        const updated_data = [...data, entry]
                        setData(updated_data)
                        console.log('enregistrement dans le localStorage')
                        localStorage.setItem(
                            model.id,
                            JSON.stringify(updated_data)
                        )
                        modalRef.current.toggle()
                        modalRef.current.clear()
                        setSearching(false)
                        setDataToUse(data)
                        searchRef.current.clear()
                    }}
                    key={idx}
                    label={b.label}
                    title={b.title}
                    labelSubmit="Save"
                    reset
                    labelReset="Clear"
                />
            )
        }
    }

    return (
        <div className={`dataTable ${model.id}`}>
            <div className="dataTable-header">
                <div className="dth-leftpart">
                    {model.buttons && (
                        <div className="datatable-buttons">
                            {model.buttons.map((b, idx) => getButtons(b, idx))}
                        </div>
                    )}
                    {model.entries && (
                        <Entries
                            entries={model.entries}
                            updateNbPages={updateNbPages}
                        />
                    )}
                </div>
                <Search ref={searchRef} searchFilter={searchFilter} />
            </div>
            <table>
                <thead onClick={(ev) => sort(dataToUse, ev.target.cellIndex)}>
                    <tr>
                        {model.flatHeaders.map((hd, idx) =>
                            idx === sortBy ? (
                                <th
                                    className={descending ? 'desc' : 'asc'}
                                    key={idx}
                                    style={{
                                        width: hd.width,
                                    }}
                                >
                                    {hd.title}
                                </th>
                            ) : (
                                <th
                                    key={idx}
                                    style={{
                                        width: hd.width || 'auto',
                                    }}
                                >
                                    {hd.title}
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, idx) => (
                        <tr key={idx}>
                            {model.flatHeaders.map((hd, idx) => (
                                <td key={idx}>{format(row, hd)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                {model.footer && (
                    <tfoot>
                        <tr>
                            {model.flatHeaders.map((hd, idx) => (
                                <th key={idx}>{hd.title}</th>
                            ))}
                        </tr>
                    </tfoot>
                )}
            </table>
            <div className="dataTable-footer">
                <EntriesPages
                    setPage={setPage}
                    page={page}
                    N={dataToUse.length}
                    itemsPerPage={itemsPerPage}
                    Tot={initial_data.length}
                    searching={searching}
                />
            </div>
        </div>
    )
}

export default Datatable
