/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useRef, forwardRef, useImperativeHandle } from 'react'
const Search = forwardRef(({ searchFilter }, searchRef) => {
    useImperativeHandle(searchRef, () => ({
        clear,
    }))
    const inputRef = useRef(null)
    const clear = () => {
        inputRef.current.value = ''
    }
    return (
        <label>
            Search:
            <input ref={inputRef} onChange={searchFilter} type="search" />
        </label>
    )
})

export default Search
