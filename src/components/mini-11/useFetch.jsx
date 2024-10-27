import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true)
            setError(null);
            const response = await fetch(url);
            const result = await response.json();
            if (result) {
                setdata(result.users);
                setLoading(false);

            }


        } catch (err) {
            console.log("e", err)
            setError(err || err.message);
            setLoading(false);

        }

    }
    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };

}

export default useFetch