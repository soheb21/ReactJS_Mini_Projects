import React, { useState } from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ list = [] }) => {

    return (
        <ul>
            {
                list && list.length > 0 && list.map((itemList, ind) => <MenuItem key={ind} item={itemList} />)
            }
        </ul>
    )
}

export default MenuList