import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../api'
import cookie from "js-cookie"


const ButtonDrp = () => {

    const token = cookie.get('token');

    const [userData, setUserData] = useState(null);

    const getUserById = async () => {
        try {
            const response = await api.get(`/singleuser`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            const userData = response.data.data;
            setUserData(userData._id)
        } catch (error) {
            console.error("Gagal mengambil data pengguna:", error);
        }
    }

    useEffect(() => {
        getUserById()

    }, [])

    const data = [
        { name: "Kuliah", to: `/user/profile/tambah-kuliah/${userData}` },
        { name: "Kerja", to: `/user/profile/tambah-kerja/${userData}` },
        { name: "Kuliah Kerja", to: `/user/profile/tambah-kuliah-kerja/${userData}` },
        { name: "Mencari Kerja", to: `/user/profile/tambah-mencari-kerja/${userData}` },
        { name: "Usaha", to: `/user/profile/tambah-usaha/${userData}` },
    ]
    return (

        <div className="hs-dropdown relative inline-flex group">
            <button
                type="button"
                className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-[#17A2B8] dark:text-white dark:hover:bg-[#287f8d] dark:focus:outline-none"
            >
                Status
                <svg
                    className="hs-dropdown-open:rotate-180 w-4 h-4 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9 12 15 18 9" />
                </svg>
            </button>
            <div className="hs-dropdown-menu transition-opacity duration-300 origin-top-right absolute z-10 mt-12 hidden w-[140%] bg-white shadow-md rounded-lg p-2 dark:bg-white  dark:border dark:border-[#17A2B8] after:h-4 after:absolute after:-bottom-4 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full group-hover:block">
                {
                    data.map((item, index) => (
                        <Link
                            key={index}
                            className="flex items-center py-2 px-3 rounded-lg text-sm dark:text-black dark:hover:bg-[#17A2B8] dark:hover:text-white"
                            to={item.to}
                        >
                            {item.name}
                        </Link>
                    ))
                }


            </div>
        </div>

    )
}

export default ButtonDrp