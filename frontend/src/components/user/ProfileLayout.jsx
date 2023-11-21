import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar'
import api from '../../api'
import moment from 'moment';
import ButtonDrp from './Button_Dropdown/ButtonDrp';
import cookie from "js-cookies"
// import { Link } from 'react-router-dom';
import TableEditUser from './table/TableEditUser';

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
    const [newPassword, setNewPassword] = useState('')
    const [alertt, setAlert] = useState('')
    const [jenis, setJenis] = useState('')
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [nameKerja, setNameKerja] = useState('')
    const [jenisKerja, setJenisKerja] = useState('')
    const [idKerja, setIdKerja] = useState('')
    const [nameKuliahKerja, setNameKuliahKerja] = useState('')
    const [jenisKuliahKerja, setJenisKuliahKerja] = useState('')
    const [idKuliahKerja, setidKuliahKerja] = useState('')
    const [nameMencariKerja, setNameMencarikerja] = useState('')
    const [jenisMencariKerja, setJenisMencarikerja] = useState('')
    const [idMencariKerja, setIdMencarikerja] = useState('')
    const [nameUsaha, setNameUsaha] = useState('')
    const [jenisUsaha, setJenisUsaha] = useState('')
    const [idUsaha, setIdUsaha] = useState('')

    const [error, setError] = useState('')


    const token = cookie.getItem('token');

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

    const handleChangeNewPassword = (e) => {
        const value = e.target.value
        setNewPassword(value)
    }

    const handleOnchangeSimpan = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Authorization': `${token}`
            }
        };
        try {
            const response = await api.patch('/updateuser', {
                nama, tanggal_lahir, jurusan, angkatan, email, nomor_WA
            }, config)
            setAlert(response.data.message)
        } catch (error) {
            setError(error.response.data.message)
        } finally {
            setTimeout(() => {
                setAlert('')
            }, 4000)
        }
    }

    const handleSimpanUserPass = async (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Authorization': `${token}`
            }
        }
        try {
            const data = {
                currentPassword: password,
                newPassword: newPassword,
            }
            const response = await api.patch('/ganti-password', data, config)
            setAlert(response.data.message)
            setPassword('')
            setNewPassword('')
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } catch (error) {
            setError(error.response.data.message)
        } finally {
            setTimeout(() => {
                setAlert('')
                setError('')
            }, 4000);
        }

    }

    const deleteKuliah = async (id) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data kuliah?");
        if (confirmDelete) {
            try {
                await api.delete(`/kuliah/${id}`)
                window.location.reload()
            } catch (error) {
                console.error(error)
            }
        }
    }
 
    const deleteKerja = async (idKerja) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data kerja?");
        if (confirmDelete) {
            try {
                await api.delete(`/kerja/${idKerja}`)
                window.location.reload()
            } catch (error) {
                console.error(error)
            }
        }
    }

    const deleteKuliahKerja = async (idKuliahKerja) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data kuliah & kerja?");
        if (confirmDelete) {
            try {
                await api.delete(`/kuliah-kerja/${idKuliahKerja}`)
                window.location.reload()
            } catch (error) {
                console.error(error)
            }
        }
    }

    const deleteMencariKerja = async (idMencariKerja) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data mencari kerja?");
        if (confirmDelete) {
            try {
                await api.delete(`/mencari-kerja/${idMencariKerja}`)
                window.location.reload()
            } catch (error) {
                console.error(error)
            }
        }
    }

    const deleteUsaha = async (idUsaha) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data usaha?");
        if (confirmDelete) {
            try {
                await api.delete(`/usaha/${idUsaha}`)
                window.location.reload()
            } catch (error) {
                console.error(error)
            }
        }
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
        }
    }

    const getKuliahById = async () => {
        try {
            const response = await api.get('/kuliah', {
                headers: {
                    'Authorization': `${token}`
                }
            });
            const kuliahData = response.data.data;
            setName(kuliahData.nama)
            setJenis(kuliahData.jenis)
            setId(kuliahData.user)
            // console.log(kuliahData.user)
        } catch (error) {

        }
    }

    const readKerjaById = async () => {
        try {
            const response = await api.get('/kerja', {
                headers: {
                    'Authorization': `${token}`
                }
            })

            const kerjaData = response.data.data
            setNameKerja(kerjaData.nama)
            setJenisKerja(kerjaData.jenis)
            setIdKerja(kerjaData.user)
            // console.log("ini adalah isi dari data kerj: ",kerjaData)
        } catch (error) {
            // setAlert(error.response.data.message)
        }
    }

    const readSingleKuliahKerja = async () => {
        try {
            const response = await api.get('/kuliah-kerja', {
                headers: {
                    'Authorization': `${token}`
                }
            })
            const kuliahKerjaData = response.data.data
            setNameKuliahKerja(kuliahKerjaData.nama)
            setJenisKuliahKerja(kuliahKerjaData.jenis)
            setidKuliahKerja(kuliahKerjaData.user)
            // console.log(kuliahKerjaData)
        } catch (error) {

        }
    }

    const readSingleMencariKerja = async () => {
        try {
            const response = await api.get('/mencari-kerja', {
                headers: {
                    "Authorization": `${token}`
                }
            })
            const mencariKerjaData = response.data.data
            setNameMencarikerja(mencariKerjaData.nama)
            setJenisMencarikerja(mencariKerjaData.jenis)
            setIdMencarikerja(mencariKerjaData.user)
        } catch (error) {

        }
    }

    const readSingleUsaha = async () => {
        try {
            const response = await api.get('/usaha', {
                headers: {
                    'Authorization': `${token}`
                }
            })
            const usahaData = response.data.data
            setNameUsaha(usahaData.nama)
            setJenisUsaha(usahaData.jenis)
            setIdUsaha(usahaData.user)
        } catch (error) {

        }
    }

        useEffect(() => {
            getUserById()
            getKuliahById()
            readKerjaById()
            readSingleKuliahKerja()
            readSingleMencariKerja()
            readSingleUsaha()
        }, [])

        return (
            <div className='mt-16'>
                <div>
                    <Navbar />
                </div>
                <div className='m-2 mb-4'>
                    {alertt && (
                        <div className="fixed top-[56px] h-16 inset-0 flex items-center p-4 mb-4  text-sm text-green-900 bg-green-200 dark:bg-green-100 dark:text-green-600" role="alert">
                            <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            {alertt}
                        </div>
                    )}

                    {error && (
                        <div className="fixed top-[56px] h-16 inset-0 flex items-center p-4 mb-4 text-sm text-red-900 border border-red-500 rounded-lg bg-red-50  dark:text-red-600 dark:border-red-900" role="alert">
                            <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            {error}
                        </div>
                    )}
                    <h1 className='text-3xl font-semibold m-3 pt-5'>Kelola Profil</h1>
                    <hr />
                    <div className='flex  m-3'>
                        <form className="flex gap-3 w-screen " action="">
                            <div className='w-[50%]'>

                                {/* Nama */}
                                <div className='mb-5'>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama</label>
                                    <input type="text" name="nama" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Nama" value={nama} onChange={handleChangeName} required />
                                </div>
                                {/* Tanggal lahir */}
                                <div className='mb-5'>
                                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tanggal Lahir</label>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="" value={tanggal_lahir} onChange={handleChangeTgl} required />
                                </div>
                                {/* Nomor Ijazah */}
                                <div className='mb-5'>
                                    <label htmlFor="ijazah" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nomor Ijazah</label>
                                    <input disabled type="text" name="ijazah" id="ijazah" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black cursor-not-allowed" placeholder="Masukan Nomor Ijazah" value={nomor_ijazah} onChange={handleChangeNoIjazah} required />
                                </div>
                                {/* Jurusan */}
                                <div className='mb-5'>
                                    <label htmlFor="jurusan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jurusan</label>
                                    <select id="jurusan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" value={jurusan} onChange={handleChangeJurusan}>
                                        <option value="" >Pilih Jurusan</option>
                                        <option value="bahasa">Bahasa</option>
                                        <option value="ipa">IPA</option>
                                        <option value="ips">IPS</option>
                                    </select>
                                </div>
                                {/* Angkatan */}
                                <div className='mb-5'>
                                    <label htmlFor="angkatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Angkatan</label>
                                    <input type="number" name="angkatan" id="angkatan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Angakatan (2019)" value={angkatan} onChange={handleChangeAngkatan} required />
                                </div>
                                {/* Email */}
                                <div className='mb-5'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Email" value={email} onChange={handleChangeEmail} required />
                                </div>
                                {/* Nomor WA */}
                                <div className='mb-5'>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nomor WA</label>
                                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Nomor" value={nomor_WA} onChange={handleChangeNoWA} required />
                                </div>
                                <div className='flex'>
                                    <button onClick={handleOnchangeSimpan} className="text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#007bff] dark:hover:bg-[#0475ef] mr-5">Update Data</button>
                                    <ButtonDrp />
                                </div>
                            </div>
                            <div className='w-[50%] '>
                                {/* username */}
                                <div className='mb-5'>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                                    <input disabled type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Masukan Username" value={username} onChange={handleChangeUsername} required />
                                </div>
                                <div className='mb-5'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-balck">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Masukan Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" value={password} onChange={handleChangePassword} required />
                                </div>
                                <div className='mb-5'>
                                    <label htmlFor="password-baru" className="block mb-2 text-sm font-medium text-gray-900 dark:text-balck">Password Baru</label>
                                    <input type="password" name="password-baru" id="password-baru" placeholder="Masukan Password Baru" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" value={newPassword} onChange={handleChangeNewPassword} required />
                                </div>
                                <button onClick={handleSimpanUserPass} className="text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#007bff] dark:hover:bg-[#0475ef] mr-5">Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <div className='relative items-center flex flex-col m-3'>
                    <label className='uppercase font-mono text-lg'>Data Anda</label>
                    <table className="w-[60%] text-sm text-left">
                        <thead className="text-xs uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jenis Tabel
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        {name && jenis && (
                            <TableEditUser data={[{ id, name, jenis }]} onDelete={deleteKuliah} editLink={`user/profile/edit-kuliah/${id}`} />
                        )}
                        {nameKerja && jenisKerja && (
                            <TableEditUser data={[{ id: idKerja, name: nameKerja, jenis: jenisKerja }]} onDelete={deleteKerja} editLink={`user/profile/edit-kerja/${idKerja}`} />
                        )}
                        {nameKuliahKerja && jenisKuliahKerja && (
                            <TableEditUser data={[{ id: idKuliahKerja, name: nameKuliahKerja, jenis: jenisKuliahKerja }]} onDelete={deleteKuliahKerja} editLink={`user/profile/edit-kuliah-kerja/${idKuliahKerja}`} />
                        )}
                        {nameMencariKerja && jenisMencariKerja && (
                            <TableEditUser data={[{ id: idMencariKerja, name: nameMencariKerja, jenis: jenisMencariKerja }]} onDelete={deleteMencariKerja} editLink={`user/profile/edit-mencari-kerja/${idMencariKerja}`} />
                        )}
                         {nameUsaha && jenisUsaha && (
                            <TableEditUser data={[{ id: idUsaha, name: nameUsaha, jenis: jenisUsaha }]} onDelete={deleteUsaha} editLink={`user/profile/edit-usaha/${idUsaha}`} />
                        )}
                    </table>
                </div>
            </div >
        )
    }


export default ProfileLayout
