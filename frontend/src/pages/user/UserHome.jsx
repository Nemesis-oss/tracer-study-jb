import {React, useEffect} from 'react'
import UserLayout from '../../components/user/UserLayout'
import { useNavigate } from "react-router-dom"

const UserHome = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    const updatedToken = localStorage.getItem('token');
    if (!updatedToken) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  return (
    <div>
      <UserLayout />
    </div>
  )
}

export default UserHome

