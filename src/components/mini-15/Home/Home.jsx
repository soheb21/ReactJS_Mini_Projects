import React, { useContext } from 'react'
import { globalState } from '../context'
import "./home.css"
import { Link } from 'react-router-dom';
import Card from '../subcomponent/card/Card';

const Home = () => {
    const { data, loading, err } = useContext(globalState);



    return (
        <>
            {
                loading ? <h1>Loading please wait ....</h1>
                    : <div className='hero'>
                        {
                            data && data.length > 0 && data.map((i) => (
                                <Link key={i.id} to={`/${i.id}`} style={{ textDecoration: "none", color: "white" }}>
                                    <Card i={i} />
                                </Link>
                            ))
                        }
                    </div>


            }
            {err && <h2>{err}</h2>}
        </>
    )
}

export default Home