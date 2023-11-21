import React, {useEffect} from 'react'
import EditKerjaLayout from '../../components/user/Edit_Form/EditKerjaLayout'
import { useNavigate } from "react-router-dom"
import cookie from "js-cookies"

const EditKerja = () => {
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
            <EditKerjaLayout />
        </div>
    )
}

export default EditKerja