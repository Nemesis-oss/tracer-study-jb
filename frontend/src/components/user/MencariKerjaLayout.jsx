import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import img from "../../images/back3.png"
import Footer from './Footer/Footer'
import TableMencariKerja from './table/TableMencariKerja'

const MencariKerjaLayout = () => {
  return (
    <div >
        <Navbar/>
        <Banner
        img={img}
        Jenis={"Mencari Kerja"}
        />
        <TableMencariKerja/>
        <Footer/>
    </div>
  )
}

export default MencariKerjaLayout