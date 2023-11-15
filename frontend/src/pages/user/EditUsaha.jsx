import React, {useEffect} from 'react'
import EditUsahaLayout from '../../components/user/Edit_Form/EditUsahaLayout'
import { useNavigate } from "react-router-dom"
import cookie from "js-cookies"

const EditUsaha = () => {
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
            <EditUsahaLayout />
        </div>
    )
}

export default EditUsaha