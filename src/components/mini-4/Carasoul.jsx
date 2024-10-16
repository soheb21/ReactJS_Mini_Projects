import React, { useEffect, useState } from 'react'
import "./Carasoule.css"
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carasoul = ({ url, limit, page }) => {
    const [data, setdata] = useState([]);
    const [currImg, setCurrImg] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${url}?page=${page}&limit=${limit}`);
            const result = await res.json();
            if (result) {
                setdata(result);
                setLoading(false);
            }

        } catch (e) {
            setErrMsg(e.message);
            setLoading(false);

        }
    }
    useEffect(() => {
        if (url !== "") fetchData();
    }, [url])
    if (errMsg) {
        return <h1 className='container flexFamily'>{errMsg}</h1>
    }
    if (loading) {
        return <h1 className='container flexFamily'>{'Loading...! Please wait'}</h1>
    }
    return (
        <div className='slider container flexFamily'>
            <h1>Carasoul</h1>
            <FaArrowAltCircleLeft onClick={() => setCurrImg(currImg === 0 ? data.length - 1 : currImg - 1)} className='arrow arrow-left' />

            {
                data && data.map((item, ind) => (
                    <img key={item.id} className={currImg === ind ? 'image ' : 'hide-image'} src={item.download_url} alt='images' />
                ))
            }
            <FaArrowCircleRight onClick={() => setCurrImg(currImg === data.length - 1 ? 0 : currImg + 1)} className='arrow arrow-right' />
            <span className='img-circle'>
                {data && data.map((_, ind) => <button onClick={() => setCurrImg(ind)} className={currImg === ind ? 'active-cirle' : 'btn-cirle'} key={ind}></button>)}
            </span>

        </div>
    )
}

export default Carasoul