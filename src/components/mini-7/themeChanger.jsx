import React, { useEffect, useRef, useState } from 'react'
import "./theme.css"

const ThemeChanger = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light');
    useEffect(() => {
        if (theme) {
            localStorage.setItem('theme', JSON.stringify(theme));
        }
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <div className='test container flexFamily' >
            <h1>Theme Changer</h1>
            <button onClick={() => setTheme((prev) => prev === 'light' ? 'dark' : 'light')}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div >
    )
}

export default ThemeChanger