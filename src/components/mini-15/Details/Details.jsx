import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./detail.css"
import { globalState } from '../context';

const Details = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState({})
    const { favs, handlefav } = useContext(globalState);

    const fetchOne = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const res = await response.json();
            setDetail(res.data.recipe);
            setLoading(false)

        } catch (e) {
            setLoading(false);
            console.log(e)
        }
    }
    useEffect(() => {
        fetchOne();
    }, [id])

    let isPresent = () => {
        return favs.some((i) => i.id === detail.id);
    }

    return (
        <div className='details '>
            {
                loading ? <h1>Loading please wait...</h1>
                    : <>
                        <h1>Recipe: <span>{detail.title}</span></h1>
                        <div className="card-detail">
                            <img height={400} width={400} src={detail.image_url} alt="image_url" />
                            <ul>

                                {
                                    detail.ingredients && detail.ingredients.length > 0 && detail.ingredients.map((i, ind) => (
                                        <li key={ind}>

                                            <p><span>Quantity:</span>{" "}{i.quantity}</p>
                                            <p><span>Unit:</span>{" "}{i.unit}</p>
                                            <p><span>Dscription:</span>{""}{i.description}</p>
                                        </li>
                                    ))
                                }
                                <li><button onClick={() => handlefav(detail)}>{isPresent() ? 'Remove to Favroute' : 'Add to Favroute'}</button></li>
                            </ul>

                        </div>
                    </>
            }


        </div>
    )
}

export default Details