import { React, useEffect } from 'react'
import KerjaLayout from '../../components/user/KerjaLayout'
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/user/Navbar/Navbar'

const Kerja = () => {

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
                <KerjaLayout />
        </div>
    )
}

export default Kerja

