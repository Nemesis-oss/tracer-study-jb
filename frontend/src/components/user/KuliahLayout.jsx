import React from 'react'
import Navbar from './Navbar/Navbar'
import TableKuliah from './table/TableKuliah'
import Footer from './Footer/Footer'
import Banner from './Banner/Banner.jsx'
import image from "../../images/back2.png";


const KuliahLayout = () => {
  return (
    <div >
      <Navbar />
      <Banner
        img={image}
        Jenis={"Kuliah"}
      />
      <TableKuliah />
      <Footer />
    </div>
  )
}

export default KuliahLayout