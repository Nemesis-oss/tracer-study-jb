import React, {useEffect} from 'react'
import FormKuliahKerjaLayout from '../../components/user/Form/FormKuliahKerjaLayout'
import {useNavigate} from "react-router-dom"
import cookie from "js-cookie"

const FormKuliahKerja = () => {
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
            <FormKuliahKerjaLayout />
        </div>
    )
}

export default FormKuliahKerja