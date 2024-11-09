import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../subcomponent/card/Card'
import { globalState } from '../context'

const Favroute = () => {
    const { favs } = useContext(globalState)

    return (
        <div className='hero'>
            {
                favs && favs.length > 0 ? favs.map((i) => (
                    <Link key={i.id} to={`/${i.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <Card i={i} />
                    </Link>
                ))
                    : <h1>Not Found!</h1>
            }
        </div>

    )
}
export default Favroute