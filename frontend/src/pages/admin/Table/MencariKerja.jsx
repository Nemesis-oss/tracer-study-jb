import MencariKerjaLayout from "../../../components/admin/Tabel/MencariKerjaLayout";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import cookie from "js-cookies"

const MencariKerja = () => {
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
      <MencariKerjaLayout />
    </div>
  );
};

export default MencariKerja;
