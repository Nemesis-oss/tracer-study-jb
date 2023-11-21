import EditDataIjazahLayout from '../../../components/admin/FormEdit/EditDataIjazahLayout'
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import cookie from "js-cookies"

const EditDataIjazah = () => {
  const navigate = useNavigate()
  const token = cookie.getItem('token')
  const roles = cookie.getItem('roles')


  useEffect(() => {
    const updatedToken = cookie.getItem('token');
    const updatedRoles = cookie.getItem('roles')
    if (!updatedToken) {
      navigate('/', { replace: true });
    }
    if (updatedRoles === "user") {
      navigate('/user')
    }
  }, [token, roles, navigate]);
  return (
    <div>
      <EditDataIjazahLayout />
    </div>
  )
}

export default EditDataIjazah
