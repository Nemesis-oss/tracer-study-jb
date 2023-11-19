import React, {useEffect} from 'react'
import FormMencariKerjaLayout from '../../components/user/Form/FormMencariKerjaLayout'
import {useNavigate} from "react-router-dom"
import cookie from "js-cookies"

const FormMencariKerja = () => {
    const navigate = useNavigate()
    const token = cookie.getItem('token')
    const roles = cookie.getItem('roles')
  
  
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
            <FormMencariKerjaLayout />
        </div>
    )
}

export default FormMencariKerja