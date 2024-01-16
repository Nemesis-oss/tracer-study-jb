import HalamanAwalAdminLayout from "../../components/admin/HalamanAwalAdminLayout";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import cookie from "js-cookie"

const AdminHome = () => {
  const navigate = useNavigate()
  const token = cookie.get('token')
  const roles = cookie.get('roles')


  useEffect(() => {
    const updatedToken = cookie.get('token');
    const updatedRoles = cookie.get('roles')
    if (!updatedToken) {
      navigate('/', { replace: true });
    }
    if (updatedRoles === "user") {
      navigate('/user')
    }
  }, [token, roles, navigate]);
  return (
    <div>
      <HalamanAwalAdminLayout />
    </div>
  );
};

export default AdminHome;
