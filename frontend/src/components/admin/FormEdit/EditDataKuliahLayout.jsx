import { useState, React, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../../api"

const EditDataKuliahLayout = () => {
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [namaUniversitas, setNamaUniversitas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [jenjang, setJenjang] = useState("");
  const [error, setError] = useState("")
  const [filter, setFilter] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);
  const [inputValue, setInputValue] = useState('');


  const { userId } = useParams()
  const navigate = useNavigate()

  const handleNama = (e) => {
    const value = e.target.value;
    setNama(value);
  };
  const handleChangeAngkatan = (e) => {
    const value = e.target.value;
    setAngkatan(value);
  };
  const handleChangeNamaUniversitas = (e) => {
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
  const handleChangeJurusan = (e) => {
    const value = e.target.value;
    setJurusan(value);
  };
  const handleChangeJenjang = (e) => {
    const value = e.target.value;
    setJenjang(value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        nama: nama,
        angkatan: angkatan,
        nama_universitas: namaUniversitas,
        prodi: jurusan,
        jenjang: jenjang
      }
      await api.put(`/kuliah/${userId}`, updatedData);
      alert('Data berhasil di update')
      navigate('/admin/kuliah');
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const readSingleKuliah = async () => {
    try {
      const response = await api.get(`/kuliah/${userId}`)
      const dataKuliah = response.data.data
      setNama(dataKuliah.nama)
      setAngkatan(dataKuliah.angkatan)
      setNamaUniversitas(dataKuliah.nama_universitas)
      setJurusan(dataKuliah.prodi)
      setJenjang(dataKuliah.jenjang)
      setInputValue(dataKuliah.nama_universitas)
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

  useEffect(() => {
    readUniv()
    readSingleKuliah()
  }, [])

  useEffect(() => {
    setInputValue(namaUniversitas);
  }, [namaUniversitas]);

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
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 z-20">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Edit Data Kuliah
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
                  name="nama"
                  id="nama"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Nama Lengkap"
                  value={nama}
                  onChange={handleNama}
                  required
                />
              </div>
              {/* Angkatan */}
              <div>
                <label
                  htmlFor="angkatan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Angkatan
                </label>
                <input
                  type="number"
                  name="angkatan"
                  id="angkatan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Angkatan (2019)"
                  value={angkatan}
                  onChange={handleChangeAngkatan}
                  required
                />
              </div>

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
                  onChange={handleChangeNamaUniversitas}
                  required
                />
                {showDropdown && filteredUniversities.length > 0 && (
                  <ul className="mt-1 border border-gray-300 rounded-lg absolute bg-white max-h-28 overflow-y-auto">
                    {filteredUniversities.map((university, index) => (
                      <li
                        key={index}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => {
                          setNamaUniversitas(university);
                          setShowDropdown(false);
                        }}
                      >
                        {university}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Jurusan */}
              <div>
                <label
                  htmlFor="jurusan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Jurusan
                </label>
                <input
                  type="text"
                  name="jurusan"
                  id="jurusan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Jurusan"
                  value={jurusan}
                  onChange={handleChangeJurusan}
                  required
                />
              </div>
              {/* Jenjang */}
              <div>
                <label
                  htmlFor="jenjang"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Jenjang
                </label>
                <input
                  type="text"
                  name="jenjang"
                  id="jenjang"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Jenjang"
                  value={jenjang}
                  onChange={handleChangeJenjang}
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
                  to={"/admin/kuliah"}
                  className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black"
                >
                  <button type="submit">Back</button>
                </Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditDataKuliahLayout;
