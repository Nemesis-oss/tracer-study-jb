import React,{useEffect} from 'react'
import FormKuliahLayout from '../../components/user/Form/FormKuliahLayout'
import {useNavigate} from "react-router-dom"
import cookie from "js-cookies"

const FormKuliah = () => {
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
      <FormKuliahLayout />
    </div>
  )
}

export default FormKuliah