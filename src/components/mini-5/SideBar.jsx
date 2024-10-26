import React from 'react'
import { SideBarData } from "./sideBarData"
import MenuList from './MenuList'

const SideBar = () => {

    return (
        <div className='container'>
            <MenuList list={SideBarData} />
        </div>
    )
}

export default SideBar