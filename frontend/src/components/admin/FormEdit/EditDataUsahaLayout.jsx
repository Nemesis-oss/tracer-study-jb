import { useState, React, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../../api"

const EditDataUsahaLayout = () => {
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [pendAkhir, setPendAkhir] = useState('')
  const [jenisUsaha, setJenisUsaha] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tahunMulai, setTahunMulai] = useState("");
  const [error, setError] = useState("")

  const { userId } = useParams()
  const navigate = useNavigate()

  const handleNama = (e) => {
    const value = e.target.value;
    setNama(value);
  };
  const handleAngkatan = (e) => {
    const value = e.target.value;
    setAngkatan(value);
  };
  const handleJenisUsaha = (e) => {
    const value = e.target.value;
    setJenisUsaha(value);
  };
  const handleAlamat = (e) => {
    const value = e.target.value;
    setAlamat(value);
  };
  const handleTahunMulai = (e) => {
    const value = e.target.value;
    setTahunMulai(value);
  };
  const handleChangePendAkhir = (e) => {
    const value = e.target.value
    setPendAkhir(value)
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        nama: nama,
        angkatan: angkatan,
        pendidikan_akhir: pendAkhir,
        jenis_usaha: jenisUsaha,
        alamat_usaha: alamat,
        tahun_usaha: tahunMulai
      }
      await api.put(`/usaha/${userId}`, updatedData);
      alert('Data berhasil di update')
      navigate('/admin/usaha');
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const readSingleUsaha = async () => {
    try {
      const response = await api.get(`/usaha/${userId}`)
      const dataMencariKerja = response.data.data
      setNama(dataMencariKerja.nama)
      setAngkatan(dataMencariKerja.angkatan)
      setPendAkhir(dataMencariKerja.pendidikan_akhir)
      setJenisUsaha(dataMencariKerja.jenis_usaha)
      setAlamat(dataMencariKerja.alamat_usaha)
      setTahunMulai(dataMencariKerja.tahun_usaha)
    } catch (error) {

    }
  }
  useEffect(() => {
    readSingleUsaha()
  }, [])
  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center px-6 py-[40%] md:py-[10%] mx-auto relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('../images/back2.png')] brightness-50 z-0">
          {" "}
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 z-20">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Edit Data Usaha
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
                  onChange={handleAngkatan}
                  required
                />
              </div>
              {/* Pendidikan Terakhir */}
              <div>
                <label htmlFor="pendidikan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pendidikan Terakhir</label>
                <select id="pendidikan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pendAkhir} onChange={handleChangePendAkhir}>
                  <option value="" >Pilih Pendidikan Terakhir</option>
                  <option value="sma">SMA</option>
                  <option value="d3">D3</option>
                  <option value="s1">S1</option>
                  <option value="s2">S2</option>
                  <option value="s3">S3</option>
                </select>
              </div>
              {/* Jenis Usaha*/}
              <div>
                <label
                  htmlFor="jenisUsaha"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Jenis Usaha
                </label>
                <input
                  type="text"
                  name="jenisUsaha"
                  id="jenisUsaha"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Jenis Usaha"
                  value={jenisUsaha}
                  onChange={handleJenisUsaha}
                  required
                />
              </div>
              {/* Alamat */}
              <div>
                <label
                  htmlFor="alamat"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Alamat
                </label>
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Alamat"
                  value={alamat}
                  onChange={handleAlamat}
                  required
                />
              </div>
              {/* Tahun Mulai */}
              <div>
                <label
                  htmlFor="tahunMulai"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Tahun Mulai
                </label>
                <input
                  type="text"
                  name="tahunMulai"
                  id="tahunMulai"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Tahun Mulai"
                  value={tahunMulai}
                  onChange={handleTahunMulai}
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
                  to={"/admin/usaha"}
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

export default EditDataUsahaLayout;
