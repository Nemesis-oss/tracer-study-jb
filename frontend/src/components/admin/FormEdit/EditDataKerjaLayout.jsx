import { useState, React, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../../api"

const EditDataKerjaLayout = () => {
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [error, setError] = useState("")
  const [pendAkhir, setPendAkhir] = useState('')

  const { userId } = useParams()
  const navigate = useNavigate()

  const handleChangePendAkhir = (e) => {
    const value = e.target.value
    setPendAkhir(value)
  }

  const handleNama = (e) => {
    const value = e.target.value;
    setNama(value);
  };
  const handleChangeAngkatan = (e) => {
    const value = e.target.value;
    setAngkatan(value);
  };
  const handleNamaPerusahaan = (e) => {
    const value = e.target.value;
    setNamaPerusahaan(value);
  };
  const handleChangeJabatan = (e) => {
    const value = e.target.value;
    setJabatan(value);
  };
  const handleChangeTahunMasuk = (e) => {
    const value = e.target.value;
    setTahunMasuk(value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        nama: nama,
        angkatan: angkatan,
        pendidikan_terakhir: pendAkhir,
        nama_perusahaan: namaPerusahaan,
        jabatan: jabatan,
        tahun_kerja: tahunMasuk
      }
      await api.put(`/kerja/${userId}`, updatedData);
      alert('Data berhasil di update')
      navigate('/admin/kerja');
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const readSingleKerja = async () => {
    try {
      const response = await api.get(`/kerja/${userId}`)
      const dataKerja = response.data.data
      setNama(dataKerja.nama)
      setAngkatan(dataKerja.angkatan)
      setPendAkhir(dataKerja.pendidikan_terakhir)
      setNamaPerusahaan(dataKerja.nama_perusahaan)
      setJabatan(dataKerja.jabatan)
      setTahunMasuk(dataKerja.tahun_kerja)
    } catch (error) {

    }
  }
  useEffect(() => {
    readSingleKerja()
  }, [])

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
        {/* isi form (card) */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Tambah Data Kerja
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
                <select id="pekerjaan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={namaPerusahaan} onChange={handleNamaPerusahaan}>
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
                <input type="number" name="kerja" id="angkatan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Tahun Anda Bekerja (2019)" value={tahunMasuk} onChange={handleChangeTahunMasuk} required
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
                  to={"/admin/kerja"}
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

export default EditDataKerjaLayout;
