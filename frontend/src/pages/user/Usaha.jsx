import { React, useEffect } from 'react'
import UsahaLayout from '../../components/user/UsahaLayout'
import { useNavigate } from "react-router-dom"
import cookie from "js-cookies"

const Usaha = () => {
  const navigate = useNavigate()
  const token = cookie.getItem('token')
  const roles = localStorage.getItem('roles')


  useEffect(() => {
    const updatedToken = cookie.getItem('token');
    const updatedRoles = cookie.getItem('roles')
    if (!updatedToken) {
      navigate('/', { replace: true });
    }
    if (updatedRoles === "admin") {
      navigate('/admin')
    }
  }, [token, roles, navigate]);


  return (
    <div>
        <UsahaLayout />
    </div>
  )
}

export default Usaha

