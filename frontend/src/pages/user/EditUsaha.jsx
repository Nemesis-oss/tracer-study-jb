import React, {useEffect} from 'react'
import EditUsahaLayout from '../../components/user/Edit_Form/EditUsahaLayout'
import { useNavigate } from "react-router-dom"
import cookie from "js-cookie"

const EditUsaha = () => {
    const navigate = useNavigate()
    const token = cookie.get('token')
    const roles = cookie.get('roles')

    useEffect(() => {
        const updatedToken = cookie.get('token');
        const updatedRoles = cookie.get('roles')
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