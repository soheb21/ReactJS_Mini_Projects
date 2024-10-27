import React, { useRef, useState } from 'react'
import './Model.css'

const Model = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef();
    const handleClick = (e) => {
        if (e.target === ref.current) {
            setIsOpen(!isOpen);
        }
    }
    return (
        <div>
            {
                !isOpen
                    ? (<button onClick={() => setIsOpen(!isOpen)} style={{ margin: "20px", cursor: "pointer" }}>Open Model</button>)
                    : (<div className={`${isOpen ? 'outside' : 'outside-hide'}`} onClick={handleClick} ref={ref}>
                        <div className="inside ">
                            <h1>Model header <button onClick={() => setIsOpen(!isOpen)}>Close</button></h1>
                            <div className='inside-content'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, enim. Ullam nihil quam natus itaque dolor ea veritatis quas eaque molestiae? Ullam similique neque voluptate, explicabo necessitatibus dolore totam, reprehenderit molestiae autem facilis dolores vero. Voluptates ipsum explicabo velit sunt.
                            </div>
                            <p>Footer of the Model</p>
                        </div>
                    </div>)
            }


        </div>
    )
}

export default Model