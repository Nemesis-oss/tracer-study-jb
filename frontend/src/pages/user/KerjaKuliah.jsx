import { React, useEffect } from 'react'
import KerjaKuliahLayout from '../../components/user/KerjaKuliahLayout'
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/user/Navbar/Navbar'

const KerjaKuliah = () => {
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
      <KerjaKuliahLayout />
    </div>
  )
}

export default KerjaKuliah

