/* eslint-disable react/prop-types */

/* Ce composant affiche les boutons de navigation parmi les pages
 * props:
 *      setPage : la fonction du state permettant de sélectionner la page courante
 *      page (state) : la page courante
 *      nbPages : le nombre de pages nécessaires pour afficher N entrées avec un nombre itemsPerPage d'entrées par page. */
const PagesMenu = ({ setPage, page, nbPages }) => {
    const selectPage = (ev) => {
        setPage(Number(ev.target.innerHTML))
    }

    const showButtons = () => {
        // calculer les numéros de pages devant apparaître
        const pages = []
        if (nbPages <= 6) {
            for (let i = 1; i <= nbPages; i++) pages.push(i)
        } else if (nbPages === 7) {
            if (page <= 3) pages.push(1, 2, 3, 4, 'e', 7) // 'e' pour ellipses
            if (page === 4) pages.push(1, 2, 3, 4, 5, 6, 7)
            if (page > 4) pages.push(1, 'e', 4, 5, 6, 7)
        } else if (nbPages === 8) {
            if (page <= 3) pages.push(1, 2, 3, 4, 'e', 8)
            if (page === 4) pages.push(1, 2, 3, 4, 5, 'e', 8)
            if (page === 5) pages.push(1, 'e', 4, 5, 6, 7, 8)
            if (page >= 6) pages.push(1, 'e', 5, 6, 7, 8)
        } else {
            if (page <= 3) pages.push(1, 2, 3, 4, 'e', nbPages)
            else if (page === 4) pages.push(1, 2, 3, 4, 5, 'e', nbPages)
            else if (page >= nbPages - 2)
                pages.push(
                    1,
                    'e',
                    nbPages - 3,
                    nbPages - 2,
                    nbPages - 1,
                    nbPages
                )
            else if (page === nbPages - 3)
                pages.push(1, 'e', page - 1, page, page + 1, page + 2, nbPages)
            else pages.push(1, 'e', page - 1, page, page + 1, 'e', nbPages)
        }

        const buttons = []
        pages.map((p, i) => {
            if (p === page)
                buttons.push(
                    <a className="selected" onClick={selectPage} key={i}>
                        {p}
                    </a>
                )
            else {
                if (p != 'e') {
                    buttons.push(
                        <a onClick={selectPage} key={i}>
                            {p}
                        </a>
                    )
                } else {
                    buttons.push(
                        <span key={i} className="ellipse">
                            ...
                        </span>
                    )
                }
            }
        })
        return buttons
    }

    const nextPage = () => {
        if (page === nbPages) return
        setPage(page + 1)
    }

    const previousPage = () => {
        if (page === 1) return
        setPage(page - 1)
    }

    return (
        nbPages !== 0 && (
            <div className="pages-menu">
                {page === 1 ? (
                    <a className="disabled" onClick={previousPage}>
                        Previous
                    </a>
                ) : (
                    <a onClick={previousPage}>Previous</a>
                )}
                {showButtons()}
                {page === nbPages ? (
                    <a className="disabled" onClick={nextPage}>
                        Next
                    </a>
                ) : (
                    <a onClick={nextPage}>Next</a>
                )}
            </div>
        )
    )
}

export default PagesMenu
