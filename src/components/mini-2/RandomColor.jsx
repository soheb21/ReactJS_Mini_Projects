import React, { useState } from 'react'

const RandomColor = () => {
    const [Color, setColor] = useState("")
    const generateRandomNumber = (length) => {
        return Math.floor(Math.random() * length)
    }
    const handleGenerateHex = () => {
        let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        let clr = "#"
        for (let i = 0; i < 6; i++) {
            clr += hex[generateRandomNumber(hex.length)];

        }
        setColor(clr)
    }
    const handleGenerateRGB = () => {
        let r = generateRandomNumber(256);
        let b = generateRandomNumber(256);
        let a = generateRandomNumber(256);

        setColor(`rgb(${r},${b},${a})`)
    }
    return (
        <div style={{ height: "100vh", widows: "100%", background: Color }} className='flexFamily container'>
            <h1 style={{ marginBottom: "20px" }}>Generate Random Color</h1>
            <div style={{ marginBottom: "20px" }}>
                <button style={{ background: "Orange", color: "white", padding: "10px", fontSize: "20px", borderRadius: "10px", marginRight: "10px" }} onClick={handleGenerateHex}>Hex Color</button>
                <button style={{ background: "Orange", color: "white", padding: "10px", fontSize: "20px", borderRadius: "10px" }} onClick={handleGenerateRGB}>Rgb Color</button>
            </div>
            {
                Color && <p style={{ fontSize: "2rem" }}> Color:  {Color}</p>
            }

        </div>
    )
}

export default RandomColor