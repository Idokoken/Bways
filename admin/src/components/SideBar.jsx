import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

function SideBar() {
    return (
        <div>
            <NavLink to="/add">
                <img className='w-5 h-5' src={assets.add_icon} alt='add-icon' />
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
        </div>
    )
}

export default SideBar