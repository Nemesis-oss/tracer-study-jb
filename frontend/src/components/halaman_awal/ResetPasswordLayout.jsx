import React, { useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import api from "../../api"

const ResetPasswordLayout = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showKonfPass, setShowKonfPass] = useState(false)
    const [password, setPassword] = useState('')
    const [konfrmPassword, setKonfrmPassword] = useState('')
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const toggleKonfPassdVisibility = () => {
        setShowKonfPass(!showKonfPass)
    }

    const handleChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        if (konfrmPassword !== "") {
            setPasswordMatchError(value !== konfrmPassword);
        }
    }

    const handleChangeKonfirPass = (e) => {
        const value = e.target.value
        setKonfrmPassword(value)

        if (password !== "") {
            setPasswordMatchError(password !== value);
        }
    }

    const token = useParams().token;
    const navigate = useNavigate()

    const handleClickKirim = async (e) => {
        e.preventDefault()

        if (!password || !konfrmPassword) {
            setError('Password atau Konfirmasi Pasword tidak boleh kosong')
        }

        if (password !== konfrmPassword) {
            setPasswordMatchError(true);
            setError("Password dan Konfirmasi password harus sama!");
            setTimeout(() => {
                setError('')
            }, 5000)
            return;
        }

        const data = {
            password: password,
            token: token
        }

        try {
            const response = await api.put('/resetpassword', data);
            if (response.data && response.data.message) {
                alert(response.data.message)
                setPassword('')
                setKonfrmPassword('')
                navigate('/login')
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            }
        } finally {
            setTimeout(() => {
                setError('')
            }, 4000)
        }
    }


    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto relative z-10">
                {/* bagian alert berhasil*/}
                {error && (
                    <div className="fixed top-0 h-16 inset-0 flex items-center p-4 mb-4 text-sm text-red-900 border border-red-500 rounded-lg bg-red-50  dark:text-red-600 dark:border-red-900" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        {error}
                    </div>
                )}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {/* Password */}
                        <div className='relative'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-balck">Password Baru</label>
                            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Masukan Password baru" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={handleChangePassword} required />
                            {password && (
                                <span className="absolute top-9 right-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                        <svg className="w-6 h-6 text-gray-500 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.9}>
                                                <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                                            </g>
                                        </svg>

                                    ) : (
                                        <svg className="w-6 h-6 text-gray-500 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.9} d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    )}
                                </span>
                            )}
                        </div>
                        {/* Konfir Password */}
                        <div className='relative'>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Konfirmasi Password Baru</label>
                            <input type={showKonfPass ? "text" : "password"} name="confirm-password" id="confirm-password" placeholder="Masukan Konfirmasi Password Baru" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={konfrmPassword} onChange={handleChangeKonfirPass} required />
                            {konfrmPassword && (
                                <span className="absolute top-9 right-3 cursor-pointer" onClick={toggleKonfPassdVisibility}>
                                    {showKonfPass ? (
                                        <svg className="w-6 h-6 text-gray-500 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.9}>
                                                <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                                            </g>
                                        </svg>

                                    ) : (
                                        <svg className="w-6 h-6 text-gray-500 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.9} d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    )}
                                </span>
                            )}
                            {passwordMatchError && (
                                <p className="text-sm text-red-500">
                                    Konfirmasi kata sandi tidak cocok dengan kata sandi.
                                </p>
                            )}
                        </div>
                        <div className="flex gap-2">
                            {/* button login */}
                            <button type="submit" onClick={handleClickKirim} className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">Kirim</button>
                            {/* login back */}
                            <Link to="/" className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">
                                <button type="submit" >Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ResetPasswordLayout