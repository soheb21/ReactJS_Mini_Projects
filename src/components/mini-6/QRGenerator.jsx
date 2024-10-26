import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRGenerator = () => {
    const [username, setUsername] = useState('')
    const [input, setinput] = useState('')
    const generateQR = () => {
        if (input.length > 0) {
            setUsername(input)
            setinput('')
        } else {
            alert("Please Provide the @username")
        }

    }
    return (
        <div className='container flexFamily'>
            <h1>QRGenerator</h1>
            <input style={{ padding: "10px", fontSize: "20px", marginBottom: "20px" }} type="text" value={input} placeholder='Enter Your name' onChange={(e) => setinput(e.target.value)} />
            <button onClick={generateQR} style={{ padding: "10px", fontSize: "20px", marginBottom: "20px" }}>Generate QR</button>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                {
                    username ? <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={username}
                        viewBox={`0 0 256 256`}
                    />
                        : null
                }

            </div>
        </div>
    )
}

export default QRGenerator