import React, { createContext, useEffect, useState } from 'react'
import { fetchDataFlagAPI } from './flag';

export const flagContext = createContext(null);


export default function FeatureFlagState({ children }) {
    const [loading, setloading] = useState(false);
    const [enableComp, setEnableComp] = useState({});
    const fetchData = async () => {
        try {
            setloading(true);
            const response = await fetchDataFlagAPI();
            setEnableComp(response);
            setloading(false);
        } catch (e) {
            console.log('flag fetch error', e);
            setloading(false);
            throw new Error("Something went wrong");
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <flagContext.Provider value={{ loading, enableComp }}>
            {children}
        </flagContext.Provider>
    );
}