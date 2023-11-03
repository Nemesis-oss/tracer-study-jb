import React from "react";
import { useNavigate } from "react-router-dom"

const UserLayout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
  
    if (!token) {
      navigate('/')
    }
    return (
        <div>
            ini adalah bagian halaman utama user
        </div>
    )
}

export default UserLayout