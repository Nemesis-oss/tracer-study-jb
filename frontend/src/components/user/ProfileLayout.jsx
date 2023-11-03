import { React, useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import api from '../../api'
import moment from 'moment';

const ProfileLayout = () => {
    const [nama, setNama] = useState('')
    const [tanggal_lahir, setTanggalLahir] = useState('')
    const [nomor_ijazah, setNomorIjsazah] = useState('')
    const [jurusan, setJurusan] = useState('')
    const [angkatan, setAngkatan] = useState('')
    const [email, setEmail] = useState('')
    const [nomor_WA, setNomorWA] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const token = localStorage.getItem('token');

    const handleChangeName = (e) => {
        const value = e.target.value
        setNama(value)
    }

    const handleChangeTgl = (e) => {
        const isoDate = e.target.value;
        const jsDate = new Date(isoDate);
        const formattedDate = jsDate.toISOString().split('T')[0];
        setTanggalLahir(formattedDate);
    }

    const handleChangeNoIjazah = (e) => {
        const value = e.target.value
        setNomorIjsazah(value)

    }
    const handleChangeJurusan = (e) => {
        const value = e.target.value
        setJurusan(value)

    }
    const handleChangeAngkatan = (e) => {
        const value = e.target.value
        setAngkatan(value)

    }
    const handleChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)

    }
    const handleChangeNoWA = (e) => {
        const value = e.target.value
        setNomorWA(value)
        const valueNum = value.replace(/\D/g, "");
        setNomorWA(valueNum)

    }

    const handleChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)

    }
    const handleChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const handleOnchangeSimpan = async (e) => {
        e.preventDefault()
        console.log("klik me")
    }

    const getUserById = async () => {
        try {
            const response = await api.get(`/singleuser`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            const userData = response.data.data;
            const formattedDate = moment(userData.tanggal_lahir).format("YYYY-MM-DD");

            setNama(userData.nama);
            setTanggalLahir(formattedDate);
            setNomorIjsazah(userData.nomor_ijazah);
            setJurusan(userData.jurusan);
            setAngkatan(userData.angkatan);
            setEmail(userData.email);
            setNomorWA(userData.nomor_WA);
            setUsername(userData.username);

        } catch (error) {
            console.error("Gagal mengambil data pengguna:", error);
        }
    }

    useEffect(() => {
        getUserById()

    }, [])

    return (
        <div className='mt-16'>
            <div>
                <Navbar />
            </div>
            <div className='m-2'>
                <h1 className='text-3xl font-semibold'>Kelola Profil</h1>
                <div className='flex m-3'>
                    <form className="flex gap-3 w-screen " action="">
                        <div className='w-[50%]'>
                            {/* Nama */}
                            <div className=''>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama</label>
                                <input type="text" name="nama" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Nama" value={nama} onChange={handleChangeName} required />
                            </div>
                            {/* Tanggal lahir */}
                            <div >
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tanggal Lahir</label>
                                <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="" value={tanggal_lahir} onChange={handleChangeTgl} required />
                            </div>
                            {/* Nomor Ijazah */}
                            <div>
                                <label htmlFor="ijazah" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nomor Ijazah</label>
                                <input disabled type="text" name="ijazah" id="ijazah" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black cursor-not-allowed" placeholder="Masukan Nomor Ijazah" value={nomor_ijazah} onChange={handleChangeNoIjazah} required />
                            </div>
                            {/* Jurusan */}
                            <div>
                                <label htmlFor="jurusan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jurusan</label>
                                <select id="jurusan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" value={jurusan} onChange={handleChangeJurusan}>
                                    <option value="" >Pilih Jurusan</option>
                                    <option value="bahasa">Bahasa</option>
                                    <option value="ipa">IPA</option>
                                    <option value="ips">IPS</option>
                                </select>
                            </div>
                            {/* Angkatan */}
                            <div>
                                <label htmlFor="angkatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Angkatan</label>
                                <input type="number" name="angkatan" id="angkatan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Angakatan (2019)" value={angkatan} onChange={handleChangeAngkatan} required />
                            </div>
                            {/* Email */}
                            <div >
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Email" value={email} onChange={handleChangeEmail} required />
                            </div>
                            {/* Nomor WA */}
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nomor WA</label>
                                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Nomor" value={nomor_WA} onChange={handleChangeNoWA} required />
                            </div>
                            <button onClick={handleOnchangeSimpan} className=" mt-5 text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">Simpan</button>
                        </div>
                        <div className='w-[50%]'>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                                <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Username" value={username} onChange={handleChangeUsername} required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-balck">Password</label>
                                <input type="password" name="password" id="password" placeholder="Masukan Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" value={password} onChange={handleChangePassword} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout
