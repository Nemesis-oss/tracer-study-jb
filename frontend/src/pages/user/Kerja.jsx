import { React, useEffect } from 'react'
import KerjaLayout from '../../components/user/KerjaLayout'
import { useNavigate } from "react-router-dom"
import cookie from "js-cookie"

const Kerja = () => {
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
                <KerjaLayout />
        </div>
    )
}

export default Kerja

