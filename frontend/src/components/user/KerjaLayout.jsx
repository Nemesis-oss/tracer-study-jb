import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import img from "../../images/img-2.png"
import TableKerja from './table/TableKerja'
import Footer from './Footer/Footer'

const KerjaLayout = () => {
    return (
        <div >
                <Navbar />
                <Banner
                img={img}
                Jenis={"Kerja"}
                />
                <TableKerja/>
                <Footer/>
        </div>
    )
}

export default KerjaLayout
