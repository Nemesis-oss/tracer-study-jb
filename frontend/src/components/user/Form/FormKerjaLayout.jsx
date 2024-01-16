import React, { useState } from 'react'
import jb from '../../../images/logoJB.png'
import api from "../../../api.js"
import { Link, useNavigate, useParams } from 'react-router-dom'

const FormKerjaLayout = () => {
  const [jabatan, setJabatan] = useState('')
  const [perusahaan, setPerusahaan] = useState('')
  const [error, setError] = useState('')
  const [pendAkhir, setPendAkhir] = useState('')
  const [tahunKerja, setTahunKerja] = useState('')
  const [alertt, setAlert] = useState('')
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')

  const handleChangePendAkhir = (e) => {
    const value = e.target.value
    setPendAkhir(value)
    setError('')

  }

  const handleChangePerusahaan = (e) => {
    const value = e.target.value
    setPerusahaan(value)
    setError('')

  }
  const handleChangeJabatan = (e) => {
    const value = e.target.value
    setJabatan(value)
    setError('')
  }

  const handleChangeTahunKerja = (e) => {
    const value = e.target.value
    setTahunKerja(value)
  }

  const { userId } = useParams()
  const navigate = useNavigate()

  const resetForm = () => {
    setTahunKerja('')
    setJabatan('')
    setPendAkhir('')
    setPerusahaan('')
    setPreview('')
  }
  const handleClickKirm = async (e) => {
    e.preventDefault()

    try {

      if (!file) {
        setError("Harus menyertakan foto");
        return
      }

      const data = {
        pendidikan_terakhir: pendAkhir,
        nama_perusahaan: perusahaan,
        jabatan: jabatan,
        tahun_kerja: tahunKerja,
        gambar: file
      }
      const response = await api.post(`/kerja/${userId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      resetForm()
      setAlert(response.data.message)
      setTimeout(() => {
        navigate('/user/profile')
      }, 2000)
      // console.log("isi nya", )
    } catch (error) {
      setError(error.response.data.message)
    } finally {
      setTimeout(() => {
        setAlert('')
        setError('')
      }, 3000)
    }
  }

  const loadImage = (e) => {
    const image = e.target.files[0];

    if (!image) {
      setError("Harap pilih file gambar.");
      setFile('');
      setPreview('');
      return;
    }

    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(image.name)) {
      setError("Format file harus JPG, JPEG, atau PNG.");
      setFile('');
      setPreview('');
      return;
    }

    setFile(image);
    setPreview(URL.createObjectURL(image));
    setError('');
  }


  return (
    <section className="relative">
      {/* gambar background */}
      <div className="fixed inset-0 bg-cover bg-center bg-[url('../images/bg1.jpeg')] brightness-50 h-[100vh]"> </div>
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
        {/* tulisan de brito */}
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={jb} alt="logo" />
          SMA Kolese De Britto
        </a>
        {/* isi form (card) */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Tambah Data Kerja
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">

              {/* Pendidikan Terakhir */}
              <div>
                <label htmlFor="pendidikan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pendidikan Terakhir</label>
                <select id="pendidikan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pendAkhir} onChange={handleChangePendAkhir}>
                  <option value="" >Pilih Pendidikan Terakhir</option>
                  <option value="SMA">SMA</option>
                  <option value="D3">D3</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                </select>
              </div>
              {/* Kategori Pekerjaan */}
              <div>
                <label htmlFor="pekerjaan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Kategori Pekerjaan</label>
                <select id="pekerjaan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={perusahaan} onChange={handleChangePerusahaan}>
                  <option value="" >Pilih Kategori Pekerjaan</option>
                  <option value="Aparatur/Pejabat Negara">APARATUR/PEJABAT NEGARA</option>
                  <option value="Tenaga Pengajar">TENAGA PENGAJAR</option>
                  <option value="Wiraswasta">WIRASWASTA</option>
                  <option value="Pertanian/Peternakan">PERTANIAN/PETERNAKAN</option>
                  <option value="Nelayan">NELAYAN</option>
                  <option value="Agama dan Kepercayaan">AGAMA DAN KEPERCAYAAN</option>
                  <option value="Tenaga Kesehatan">TENAGA KESEHATAN</option>
                  <option value="Pensiunan">PENSIUNAN</option>
                  <option value="Lainnya">LAINNYA</option>
                </select>
              </div>
              {/* Sub Pekerjaan */}
              <div>
                <label htmlFor="jabatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jenis Pekerjaan</label>
                <input type="text" name="jabatan" id="jabatan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Jabatan" value={jabatan} onChange={handleChangeJabatan} />
              </div>
              {/* Kapan kerja */}
              <div>
                <label htmlFor="kerja" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tahun Anda Bekerja</label>
                <input type="number" name="kerja" id="angkatan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Tahun Anda Bekerja (2019)" value={tahunKerja} onChange={handleChangeTahunKerja} required
                />
              </div>
              {/* upload foto */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" htmlFor="file_input">Upload Foto</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" onChange={loadImage} />
                <p className="mt-1 text-sm text-gray-500 dark:text-red-500" id="file_input_help">PNG, JPG or JPEG.</p>
              </div>
              {/* Preview */}
              {preview ? (
                <figure className=''>
                  <img src={preview} alt="preview image" />
                </figure>
              ) : (
                ""
              )}
              {/* {/* button kirim */}
              <div className='flex gap-2'>
                <button type='submit' className=" bg-gray-300  text-center
                w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black" onClick={handleClickKirm} >Kirim</button>
                <Link to="/user/profile" className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black">
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

export default FormKerjaLayout