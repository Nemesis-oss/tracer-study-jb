import React from 'react'
import Navbar from './Navbar/Navbar'
import TableKuliah from './table/TableKuliah'

const KuliahLayout = () => {
  return (
    <div className='mt-16'>
      <div>
        <Navbar />
      </div>
      <TableKuliah />
    </div>
  )
}

export default KuliahLayout