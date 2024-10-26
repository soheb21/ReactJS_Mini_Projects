import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItem = ({ item }) => {
    const [displayCurrChild, setDisplayCurrChild] = useState({})
    const handelClick = (getLabel) => {
        //toggle the children
        setDisplayCurrChild({
            ...displayCurrChild,
            [getLabel]: !displayCurrChild[getLabel] //{profile:true} ye{profile:false}
        })
    }
    return (
        <>

            <li>

                <p style={{ display: "flex", gap: "10px" }}>{item.label}
                    {
                        item.children && item.children.length && <span style={{ marginRight: "10px" }} onClick={() => handelClick(item.label)}>{displayCurrChild[item.label] ? '-' : '+'} </span>
                    }
                </p>
                {item.children && item.children.length && displayCurrChild[item.label] > 0
                    ?
                    <MenuList list={item.children} />
                    : null
                }
            </li>

        </>
    )
}

export default MenuItem