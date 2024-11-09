import { createContext, useEffect, useState } from "react";


export const globalState = createContext(null);

export default function GlobalStateProvider({ children }) {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);
    const [err, seterr] = useState(null)
    const [data, setdata] = useState([])
    const [favs, setFavs] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            seterr(null)
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
            const res = await response.json();
            setdata(res.data.recipes);
            setLoading(false)
            setSearch('');

        } catch (e) {
            setLoading(false);
            seterr(e)
        }
    }
    const handlefav = (detail) => {
        let check = favs.some((i) => i.id === detail.id);
        if (!check) {
            setFavs([...favs, detail])
        } else {
            let newFavs = favs.filter((i) => i.id !== detail.id);
            setFavs(newFavs);
        }
    }

    return (
        <globalState.Provider value={{ search, setSearch, data, loading, err, handleSubmit, favs, setFavs, handlefav }}>{children}</globalState.Provider>
    )

}