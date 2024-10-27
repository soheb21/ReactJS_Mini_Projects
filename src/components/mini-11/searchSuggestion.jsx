import React, { useState } from 'react'
import useFetch from './useFetch'

const SearchSuggestion = () => {
    const { data, loading, error } = useFetch('https://dummyjson.com/users');
    const [username, setUsername] = useState('')
    const [searchList, setSearchList] = useState([])
    const handleSearch = (e) => {
        setUsername(e.target.value);
        const newArr = data.filter((i) => i.firstName.toLowerCase().includes(username.toLowerCase()))
        setSearchList(newArr)

    }
    const handleClick = (name) => {
        setUsername(name);
        setSearchList([]);

    }
    if (error) {
        return <h2 className='container flexFamily'>{error}</h2>
    }
    if (loading) {
        return <h1 className='container flexFamily'>....Loading</h1>
    }


    return (
        <div className='flexFamily container'>
            <h1>Search @username</h1>
            <input value={username} onChange={(e) => handleSearch(e)} style={{ padding: '12px', fontSize: "16px" }} type="text" placeholder='search' />
            {
                searchList && username.length > 0 ? searchList.map((i, ind) => (
                    <div onClick={() => handleClick(i.firstName)} key={ind} style={{ width: '300px', background: "white", color: "black", padding: "10px", height: "auto", cursor: "pointer" }}>
                        {i.firstName}
                    </div>
                ))
                    : null
            }
            <p>{username.length > 0 && searchList.length === 0 && username}</p>
        </div>
    )
}

export default SearchSuggestion