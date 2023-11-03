import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api';

const FormLupaPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [alertt, setAlert] = useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        setError('')
    }

    const handleKirim = async (e) => {
        e.preventDefault()
        if (!email) {
            setError('Email wajib diisi!')
        } else {
            const data = {
                email: email
            }
            try {
                const response = await api.put('/forgetpassword', data)
                setAlert(response.data.message)
                setEmail('')
            } catch (error) {
                setError(error.response.data.message)
            } finally {
                setTimeout(() => {
                    setAlert('')
                }, 5000)

            }
        }
    }

    return (
        <section className="relative">
            {/* gambar background */}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto relative z-10">
                {/* bagian alert berhasil*/}
                {alertt && (
                    <div className="fixed top-0 h-16 inset-0 flex items-center p-4 mb-4  text-sm text-green-900 rounded-lg bg-green-200 dark:bg-green-100 dark:text-green-600" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        {alertt}
                    </div>
                )}

                {error && (
                    <div className="fixed top-0 h-16 inset-0 flex items-center p-4 mb-4 text-sm text-red-900 border border-red-500 rounded-lg bg-red-50  dark:text-red-600 dark:border-red-900" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        {error}
                    </div>
                )}

                {/* isi form (card) */}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Temukan Akun Anda
                        </h3>
                        <hr />
                        <form className="space-y-4 md:space-y-6" action="#">
                            {/* Email */}
                            <p>Silakan masukkan alamat email Anda untuk mencari akun Anda.</p>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 rounded text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Email" value={email} onChange={handleChangeEmail} required />
                            <div className="flex gap-2">
                                {/* button login */}
                                <button type="submit" onClick={handleKirim} className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">Kirim</button>
                                {/* login back */}
                                <Link to="/" className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">
                                    <button type="submit" >Back</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default FormLupaPassword