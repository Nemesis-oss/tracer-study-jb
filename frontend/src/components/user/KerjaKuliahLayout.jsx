import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import img from "../../images/back1.png"
import TableKuliahKerja from './table/TableKuliahKerja'
import Footer from './Footer/Footer'

const KerjaKuliahLayout = () => {
    return (
        <div >
            <Navbar />
            <Banner
                img={img}
                Jenis={"Kuliah dan Kerja"}
            />
            <TableKuliahKerja/>
            <Footer/>
        </div>
    )
}

export default KerjaKuliahLayout