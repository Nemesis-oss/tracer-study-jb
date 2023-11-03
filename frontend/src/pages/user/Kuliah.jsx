import { React, useEffect } from 'react'
import KuliahLayout from '../../components/user/KuliahLayout'
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/user/Navbar/Navbar'

const Kuliah = () => {
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
        <KuliahLayout />
    </div>
  )
}

export default Kuliah

