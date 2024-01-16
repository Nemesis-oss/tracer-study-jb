import React, { useState, useEffect } from 'react'
import jb from '../../../images/logoJB.png'
import api from "../../../api.js"
import { Link, useParams, useNavigate } from 'react-router-dom'
import cookie from 'js-cookie'

const EditKuliahLayout = () => {

  const [univ, setUniv] = useState('');
  const [prodi, setProdi] = useState('');
  const [jenjang, setJenjang] = useState('');
  const [error, setError] = useState('');
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')
  const [filter, setFilter] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleChangeUniv = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (!value.trim()) {
      setFilteredUniversities([]);
      setShowDropdown(true);
      return;
    }

    const filtered = filter.filter((university) =>
      typeof university === 'string' && university.toLowerCase().includes(value)
    );

    const limitedFiltered = filtered.slice(0, 5);

    setFilteredUniversities(limitedFiltered);
    setShowDropdown(limitedFiltered.length > 0);
  };

  const handleChangeJenjang = (e) => {
    const value = e.target.value
    setJenjang(value)

  }
  const handleChangeProdi = (e) => {
    const value = e.target.value
    setProdi(value)
  }

  const navigate = useNavigate()
  const { userId } = useParams()

  const handleClickUpdate = async (e) => {
    e.preventDefault()
    try {
      // Membuat objek data untuk dikirim ke server
      const data = {
        nama_universitas: univ,
        prodi: prodi,
        jenjang: jenjang,
        gambar: file
      };
      // Kirim data kuliah ke server dengan userId
      const response = await api.put(`/kuliah/${userId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      // Handle sukses jika diperlukan
      alert("Data berhasil di update")
      navigate('/user/profile')
    } catch (error) {
      // Handle kesalahan
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  const token = cookie.get('token');

  const getKuliahById = async () => {
    try {
      const response = await api.get('/kuliah', {
        headers: {
          'Authorization': `${token}`
        }
      });
      const kuliahData = response.data.data;
      setUniv(kuliahData.nama_universitas)
      setProdi(kuliahData.prodi)
      setJenjang(kuliahData.jenjang)
      setPreview(kuliahData.urlGambar)
      setFile(kuliahData.gambar)
      setInputValue(kuliahData.nama_universitas)
      // console.log(kuliahData)
    } catch (error) {
    }
  }

  const readUniv = async () => {
    try {
      const response = await api.get("/univ");
      const univNames = response.data.data.map((university) => university.nama_universitas);
      setFilter(univNames);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    readUniv();
    getKuliahById()
  }, []);

  useEffect(() => {
    setInputValue(univ);
  }, [univ]);



  return (
    <section className="relative">
      {/* gambar background */}
      <div className="fixed inset-0 bg-cover bg-center bg-[url('../images/bg1.jpeg')] brightness-50 h-[100vh]"> </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto relative z-10">
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
              Edit Data Kuliah
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {/* Universitas */}
              <div>
                <label htmlFor="univ" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Universitas</label>
                <input
                  type="text"
                  name="univ"
                  id="univ"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Nama Universitas"
                  value={inputValue}  // Pastikan nilai inputValue disetel di sini
                  onChange={handleChangeUniv}
                  required
                />
                {showDropdown && filteredUniversities.length > 0 && (
                  <ul className="mt-1 border border-gray-300 rounded-lg absolute bg-white max-h-28 overflow-y-auto">
                    {filteredUniversities.map((university, index) => (
                      <li
                        key={index}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => {
                          setUniv(university);
                          setShowDropdown(false);
                        }}
                      >
                        {university}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* prodi */}
              <div>
                <label htmlFor="jurusan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jurusan</label>
                <input type="text" name="jurusan" id="jurusan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Jurusan" value={prodi} onChange={handleChangeProdi} required />
              </div>
              {/* Jenjang */}
              <div>
                <label htmlFor="jurusan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Jenjang</label>
                <select id="jurursan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={jenjang} onChange={handleChangeJenjang}>
                  <option value="" >Pilih Jenjang</option>
                  <option value="D3">D3</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                </select>
              </div>
              {/* upload foto */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" htmlFor="file_input">Upload Foto</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" onChange={loadImage} />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG or JPEG.</p>
              </div>
              {/* Preview */}
              {preview ? (
                <figure className=''>
                  <img src={preview} alt="preview image" />
                </figure>
              ) : (
                ""
              )}
              {/* {/* button regis */}
              <div className='flex gap-2'>
                <button type='submit' className=" bg-gray-300  text-center
                w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black" onClick={handleClickUpdate} >Update</button>
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

export default EditKuliahLayout