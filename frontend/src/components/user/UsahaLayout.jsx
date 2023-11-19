import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from "./Banner/Banner"
import img from "../../images/back1.png"
import Footer from "./Footer/Footer"
import TableUsaha from './table/TableUsaha'

const UsahaLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner
            img={img}
            Jenis={"Usaha"}/>
            <TableUsaha/>
            <Footer/>
        </div>
    )
}

export default UsahaLayout
