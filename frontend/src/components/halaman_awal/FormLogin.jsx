import { React, useState } from "react";
import { Link } from "react-router-dom"
import jb from "../images/logoJB.png"

const FormLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    // handle untuk mengambil nilai username
    const handleOnChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    // handle untuk mengambil nilai password
    const handleOnChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }


    return (
        <section className="relative">
            {/* gambar background */}
            <div className="absolute inset-0 bg-cover bg-center bg-[url('../images/back3.png')] brightness-50"> </div>
            {/* isi konten */}
            <div className="flex flex-col items-center justify-center px-2 py-10 md:h-screen brightness-100 relative z-10 h-[100vh]">
                {/* Tulisan SMA Kolose */}
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={jb} alt="logo" />
                    SMA Kolose De Britto
                </a>
                {/* isi konten (card form login) */}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {/* tulisan silahkan masuka akan anda */}
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            {/* bagian atas username */}
                            <div className="flex">
                                {/* icon username */}
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                        <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                </span>
                                {/* inputan username */}
                                <div className="relative z-0 w-96">
                                    <input type="text" id="default_standard" className="block py-2.5 px-3 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" onChange={handleOnChangeUsername} value={username} />
                                    <label htmlFor="default_standard" className="absolute px-3 text-gray-500 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                                </div>
                            </div>

                            {/* Bagian atas Password */}
                            <div className="flex">
                                {/* icon password */}
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                                    </svg>
                                </span>
                                {/* inputan password */}
                                <div className="relative z-0 w-96">
                                    <input type={showPassword ? "text" : "password"} id="default_standard" className="block py-2.5 px-3 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleOnChangePassword} value={password} />
                                    <label htmlFor="default_standard" className="absolute px-3 text-gray-500 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    {/* logic dimana jika password ada value maka akan muncul icon mata */}
                                    {password && (
                                        <span className="absolute top-3 right-3 cursor-pointer" onClick={togglePasswordVisibility}>
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



                            </div>
                            {/* bagian atas remember dan forget */}
                            <div className="flex items-center justify-between">
                                {/* bagian atas remember me */}
                                <div className="flex items-start">
                                    {/* cek listv (centang) remember me */}
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    {/* tulisan remember me */}
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-700">Remember me</label>
                                    </div>
                                </div>
                                {/* tulisan forget password */}
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            {/* bagian button login dan back */}
                            <div className="flex gap-2">
                                {/* button login */}
                                <button type="submit" className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">Login</button>
                                {/* login back */}
                                <Link to="/" className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">
                                    <button type="submit" >Back</button>
                                </Link>
                            </div>
                            {/* bagian jika tidak atau belum punya akun */}
                            <p className="text-sm font-light text-gray-600 dark:text-gray-600">
                                Don’t have an account yet?
                                <Link to='/registrasi' className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500">Register
                                </Link >
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormLogin