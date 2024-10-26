import React, { useState } from 'react'
import "./tab.css"

const Tab = () => {
    const data = [
        {
            label: "Tab-1",
            content: <div>Hello Component Tab-1</div>
        },
        {
            label: "Tab-2",
            content: <div>Hello Component Tab-2</div>
        },
        {
            label: "Tab-3",
            content: <div>Hello Component Tab-3</div>
        },
    ]
    const [currTab, setcurrTab] = useState(0);

    return (
        <div className='flexFamily container'>
            <h1>Tab</h1>
            <div className='tabs'>
                {
                    data.map((i, ind) => <div className='flexFamily' key={i.label}>

                        <button className="tab-btn" key={ind} onClick={() => setcurrTab(ind)}>{i.label}</button>

                    </div>)
                }
            </div>
            <div style={{ color: "black" }} className="content">
                {data[currTab] && data[currTab].content}
            </div>
        </div>
    )
}

export default Tab