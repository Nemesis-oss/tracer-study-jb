import { React, useEffect } from 'react'
import UsahaLayout from '../../components/user/UsahaLayout'
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/user/Navbar/Navbar'

const Usaha = () => {
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
        <UsahaLayout />
    </div>
  )
}

export default Usaha

