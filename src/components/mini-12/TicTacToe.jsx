import React, { useEffect, useState } from 'react'
import "./game.css"

const TicTacToe = () => {
    const [box, setBox] = useState(Array(9).fill(""))
    const [isXturn, setisXturn] = useState(false);
    const [status, setStatus] = useState('');
    const getWinner = (box) => {
        let winnerPatter = [
            [0, 1, 2],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 1, 0],
            [3, 4, 5],
            [5, 4, 3],
            [6, 7, 8],
            [8, 7, 6],
            [0, 4, 8],
            [8, 4, 0],
            [6, 4, 2],
            [2, 4, 6],
        ]
        for (let i = 0; i < winnerPatter.length; i++) {
            const [a, b, c] = winnerPatter[i];
            if (box[a] && box[a] === box[b] && box[a] === box[c]) {
                return box[a];
            }
        }
        return null;
    }
    const handleClick = (ind) => {
        let copyBox = [...box];
        if (copyBox[ind] || getWinner(copyBox)) return;
        copyBox[ind] = isXturn ? 'X' : 'O'
        setisXturn(!isXturn);
        setBox(copyBox)

    }
    const handleReset = () => {
        setBox(Array(9).fill(""))
        setisXturn(false);
        getWinner(box);
    }
    useEffect(() => {
        if (getWinner(box)) {
            setStatus(`Winner ${getWinner(box)} `)
        } else if (!getWinner(box) && box.every(i => i !== '')) {
            setStatus('This Match is Draw')
        } else {
            setStatus(`Next Turn ${isXturn ? 'X' : 'O'}`)
        }
    }, [isXturn])
    return (
        <div className='container flexFamily'>
            <h1>Tic-Tac-Toe</h1>
            <div className="board">
                {
                    [...Array(9)].map((_, ind) => <span onClick={() => handleClick(ind)} className='box' key={ind}>{box[ind]}</span>)
                }
            </div>
            <button onClick={handleReset}>Reset</button>
            <h1>{status}</h1>

        </div>
    )
}

export default TicTacToe