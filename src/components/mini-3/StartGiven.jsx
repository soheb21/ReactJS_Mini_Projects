import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import "./Star.css"

const StartGiven = ({ noOfStart = 5 }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <div className='star-container container '>
            {
                [...Array(noOfStart)].map((_, ind) => {
                    ind += 1;
                    return (
                        <CiStar
                            key={ind}
                            className={`${ind <= (hover || rating) ? "clrStar" : ""}`}
                            onClick={() => setRating(ind)}
                            onMouseMove={() => setHover(ind)}
                            onMouseLeave={() => setHover(rating)}
                        />
                    )
                })
            }
        </div>
    )
}

export default StartGiven