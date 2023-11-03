import { React, useEffect } from 'react'
import MencariKerjaLayout from '../../components/user/MencariKuliahLayout'
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/user/Navbar/Navbar'

const MencariKerja = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    const updatedToken = localStorage.getItem('token');
    if (!updatedToken) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  return (
    <div>
        <MencariKerjaLayout />
    </div>
  )
}

export default MencariKerja

