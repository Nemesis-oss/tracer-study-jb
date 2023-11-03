import { React, useEffect } from 'react'
import ProfileLayout from '../../components/user/ProfileLayout'
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/user/Navbar/Navbar'

const Profile = () => {
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
                <ProfileLayout />
        </div>
    )
}

export default Profile

