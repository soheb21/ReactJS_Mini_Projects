import React from 'react'
import "./card.css"

const Card = ({ i }) => {
    return (
        <div className="card">
            <img loading='lazy' width={250} height={250} src={i.image_url} alt="image_url" />
            <p>{i.title}</p>
        </div>
    )
}

export default Card