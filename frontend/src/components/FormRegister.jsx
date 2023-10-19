import React, { useState } from 'react'
import jb from '../images/logoJB.png'

const FormRegister = () => {
  const [name, setName] = useState('')
  const [tanggaLahir, setTanggalLahir] = useState('')
  const [nomorIjazah, setNomorIjsazah] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [angkatan, setAngkatan] = useState('')
  const [email, setEmail] = useState('')
  const [nomorWA, setNomorWA] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [konfrmPassword, setKonfrmPassword] = useState('')
  const [passwordMatchError, setPasswordMatchError] = useState(false);



  const handleChangeName = (e) => {
    const value = e.target.value
    setName(value)
  }

  const handleChangeTgl = (e) => {
    const value = e.target.value
    setTanggalLahir(value)
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
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword)
  // }

  return (
    <section className="relative">
      {/* gambar background */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('../images/back2.png')] brightness-50"> </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto relative z-10">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={jb} alt="logo" />
          SMA Kolose De Britto
        </a>
        {/* isi form (card) */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Register
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {/* Nama */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama</label>
                <input type="text" name="nama" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Nama" value={name} onChange={handleChangeName} required />
              </div>
              {/* Tanggal lahir */}
              <div className="relative">
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tanggal Lahir</label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                </div>
                <input datepicker="true" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={tanggaLahir} onChange={handleChangeTgl} required />
              </div>
              {/* Nomor Ijazah */}
              <div>
                <label htmlFor="ijazah" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nomor Ijazah</label>
                <input type="text" name="ijazah" id="ijazah" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Nomor Ijazah" value={nomorIjazah} onChange={handleChangeNoIjazah} required />
              </div>
              {/* Jurusan */}
              <div>
                <label htmlFor="jurusan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jurusan</label>
                <select id="jurursan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={jurusan} onChange={handleChangeJurusan}>
                  <option value="" >Pilih Jurusan</option>
                  <option value="bahasa">Bahasa</option>
                  <option value="ipa">IPA</option>
                  <option value="ips">IPS</option>
                </select>
              </div>
              {/* Angkatan */}
              <div>
                <label htmlFor="angkatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Angkatan</label>
                <input type="number" name="angkatan" id="angkatan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Angakatan (2019)" value={angkatan} onChange={handleChangeAngkatan} required />
              </div>
              {/* Email */}
              <div >
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Email" value={email} onChange={handleChangeEmail} required />
              </div>
              {/* Nomor WA */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nomor WA</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Nomor" value={nomorWA} onChange={handleChangeNoWA} required />
              </div>
              {/* username */}
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Username"  value={username} onChange={handleChangeUsername} required />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-balck">Password</label>
                <input type="password" name="password" id="password" placeholder="Masukan Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={handleChangePassword} required />
              </div>
              {/* Konfir Password */}
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Konfirmasi Password</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Masukan Konfirmasi Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={konfrmPassword} onChange={handleChangeKonfirPass} required />
                {passwordMatchError && (
                  <p className="text-sm text-red-500">
                    Konfirmasi kata sandi tidak cocok dengan kata sandi.
                  </p>
                )}
              </div>
              {/* persetujuan */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                </div>
                {/* tulisan persetujuan */}
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="dark:text-black">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              {/* button regis */}
              <button type="submit" className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">Register</button>
              {/* kembali ligin */}
              <p className="text-sm font-light text-gray-700 dark:text-gray-700">
                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default FormRegister