/* eslint-disable react/prop-types */
import PagesMenu from './PagesMenu'

/* Ce composant placé en fin de table indique quelle est la plage des entrées qui
 * sont affichées dans la page courante sur un ensemble d'entrées. Si cet ensembe
 * d'entrées est le résultat d'une recherche, le composant indique alors en plus
 * le nombre initial total d'entrées qui ont été filtrées.
 * Il utilise le composant PagesMenu pour afficher la navigation dans les pages.
 * props:
 *      setPage : la fonction du state permettant de sélectionner la page courante
 *      page (state) : la page courante
 *      N : le nombre courant d'entrées de la table (table initiale filtrée)
 *      Tot : le nombre totale d'entrées de la table (table initiale non filtrée)
 *      searching (state) : indique si une recherche est en cours  */
const EntriesPages = ({ setPage, page, N, itemsPerPage, Tot, searching }) => {
    const nbPages = // calcule le nombre de pages nécessaires pour afficher N entrées avec un nombre itemsPerPage d'entrées par page.
        Math.floor(N / itemsPerPage) + (N % itemsPerPage === 0 ? 0 : 1)

    return (
        <div className="entries-pages">
            <div>
                {N !== 0
                    ? `Showing ${(page - 1) * itemsPerPage + 1} to
                ${Math.min(page * itemsPerPage, N)} of ${N} entries`
                    : 'no result'}
                {searching && <span> ({Tot} entries filtered)</span>}
            </div>
            <PagesMenu setPage={setPage} page={page} nbPages={nbPages} />
        </div>
    )
}

export default EntriesPages
