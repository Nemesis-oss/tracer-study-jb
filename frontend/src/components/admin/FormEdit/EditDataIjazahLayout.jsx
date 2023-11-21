import { React, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../../api";

const EditDataIjazahLayout = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [nama, setNama] = useState("");
  const [nomorIjazah, setNomorIjazah] = useState("");
  const [error, setError] = useState('')

  const handleNomorIjazah = (e) => {
    const value = e.target.value;
    setNomorIjazah(value);
  };

  const handleNama = (e) => {
    const value = e.target.value;
    setNama(value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = {
        nama: nama,
        nomor_ijazah: nomorIjazah
      }
      const response = await api.put(`/ijazah/${id}`, data)
      alert('Data berhasil di update')
      navigate('/user/ubah-data-ijazah')
    } catch (error) {
      setError(error.response.data.message)
    }
  };

  const readSingleIjazah = async () => {
    try {
      const response = await api.get(`/ijazah/${id}`)
      const dataIjazah = response.data.data
      setNama(dataIjazah.nama)
      setNomorIjazah(dataIjazah.nomor_ijazah)
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  useEffect(() => {
    readSingleIjazah()
  }, [])


  return (
    <div className="flex flex-col items-center justify-center px-6 py-[40%] md:py-[10%] mx-auto relative z-10">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('../images/back2.png')] brightness-50 z-0">
        {" "}
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 z-20">
        {error && (
          <div className="fixed top-0 h-16 inset-0 flex items-center p-4 mb-4 text-sm text-red-900 border border-red-500 rounded-lg bg-red-50  dark:text-red-600 dark:border-red-900" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            {error}
          </div>
        )}
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Edit Data Ijazah
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            {/* Nama */}
            <div>
              <label
                htmlFor="nama"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nama
              </label>
              <input
                type="text"
                name="perusahaan"
                id="perusahaan"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan Nama Lengkap"
                value={nama}
                onChange={handleNama}
                required
              />
            </div>
            {/* No Ijazah */}
            <div>
              <label
                htmlFor="noijazah"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nomor Ijazah
              </label>
              <input
                type="text"
                name="nomorijazah"
                id="nomorijazah"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan Nomor Ijazah"
                value={nomorIjazah}
                onChange={handleNomorIjazah}
                required
              />
            </div>

            {/* {/* button Update */}
            <div className="flex gap-2">
              <button
                type="submit"
                className=" bg-gray-300  text-center
                w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black"
                onClick={handleUpdate}
              >
                Update
              </button>
              <Link
                to={"/admin/ubah-data-ijazah"}
                className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black"
              >
                <button type="submit">Back</button>
              </Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default EditDataIjazahLayout;
