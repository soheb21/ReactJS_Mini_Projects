import React, { useContext } from 'react'
import "./search.css"
import { globalState } from '../../context'
const Search = () => {

    const { search, setSearch, handleSubmit } = useContext(globalState)
    return (
        <form onSubmit={handleSubmit} >
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Enter the food name..' />
        </form>
    )
}

export default Search