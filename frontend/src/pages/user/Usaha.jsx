import { React, useEffect } from 'react'
import UsahaLayout from '../../components/user/UsahaLayout'
import { useNavigate } from "react-router-dom"
import cookie from "js-cookie"

const Usaha = () => {
  const navigate = useNavigate()
  const token = cookie.get('token')
  const roles = cookie.get('roles')


  useEffect(() => {
    const updatedToken = cookie.get('token');
    const updatedRoles = cookie.get('roles')
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

