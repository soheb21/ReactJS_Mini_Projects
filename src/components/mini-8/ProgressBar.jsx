import React, { useEffect, useState } from 'react'
import "./progressBar.css"

const ProgressBar = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);
    const [currY, setCurrY] = useState(1);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=10`);
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
    function calcultaePercentage(part) {
        let whole = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return (part / whole) * 100;
    }
    useEffect(() => {
        fetchData();
        window.addEventListener("scroll", () => {
            let x = window.scrollY;
            if (x > 0) {
                const ans = calcultaePercentage(x)
                setCurrY(Math.floor(ans));
            }
        })
        return () => {
            window.removeEventListener('scroll', () => { })
        }

    }, [])
    if (errMsg) {
        return <h1 className='container flexFamily'>{errMsg}</h1>
    }
    if (loading) {
        return <h1 className='container flexFamily'>{'Loading...! Please wait'}</h1>
    }
    return (
        <>
            <div style={{ width: `${currY}%` }} className="progress"></div>

            <div className='flexFamily'>
                <h1 >ProgressBar</h1>
                {
                    data && data.length > 0
                        ? data.map((item, ind) => (
                            <div key={ind} className='flexFamily con'>
                                <p >{item.author}</p>
                                <img height={200} width={200} src={item?.download_url} alt="download_url" />
                            </div>

                        ))
                        : null
                }
                <h2>End Thank You</h2>
            </div>
        </>

    )
}

export default ProgressBar