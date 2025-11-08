import React from 'react'
import Logo from './Logo'
import Sidebar from '../Component/Sidebar'

function Navbar() {
    return (
        <div className=" w-screen z-10 h-0 pt-10 flex justify-between p-7 pb-0">
        <div> <Logo/></div>  
        <Sidebar/>
        </div>
    )
}

export default Navbar