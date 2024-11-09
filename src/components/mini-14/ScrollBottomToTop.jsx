import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../mini-11/useFetch';

const ScrollBottomToTop = () => {
    const { data, loading, error } = useFetch('https://dummyjson.com/users');
    const bottomRef = useRef(null);

    const handleToptoBottom = () => {
        bottomRef.current.scrollIntoView({
            behavior: "smooth"
        })

    }
    const handleBottomtoTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })

    }

    return (
        <div className='container flexFamily'>
            <h1>ScrollBottomToTop</h1>
            <button onClick={handleToptoBottom}>Scroll to Bottom</button>
            {
                loading ? <h1>....Loading</h1> : <ul>
                    {
                        data && data.length > 0 && data.map((i) => <li key={i.id} style={{ fontSize: "2rem", padding: "1rem" }} >{i.firstName}</li>)
                    }
                </ul>
            }
            <div ref={bottomRef}></div>
            <button onClick={handleBottomtoTop}>Scroll to Top</button>

        </div>
    )
}

export default ScrollBottomToTop