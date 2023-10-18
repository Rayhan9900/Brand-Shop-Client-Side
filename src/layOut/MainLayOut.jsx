import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../components/Navber/Navber'
import Footer from '../components/Footer/Footer'

function MainLayOut() {
    return (
        <div className=''>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}

export default MainLayOut