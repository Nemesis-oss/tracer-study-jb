import { useState, React } from "react";
import { Link } from "react-router-dom";
const EditDataKerjaDanKuliahLayout = () => {
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [namaUniversitas, setNamaUniversitas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [jenjang, setJenjang] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
  };
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
  const handleChangeNamaUniversitas = (e) => {
    const value = e.target.value;
    setNamaUniversitas(value);
  };
  const handleChangeJurusan = (e) => {
    const value = e.target.value;
    setJurusan(value);
  };
  const handleChangeJenjang = (e) => {
    const value = e.target.value;
    setJenjang(value);
  };
  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center px-6 py-[40%] md:py-[10%] mx-auto relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('../images/back2.png')] brightness-50 z-0">
          {" "}
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 z-20">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Edit Data Kerja dan Kuliah
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
              {/* Nama Perusahaan*/}
              <div>
                <label
                  htmlFor="namaPerusahaan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  name="namaPerusahaan"
                  id="namaPerusahaan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Nama Perusahaan"
                  value={namaPerusahaan}
                  onChange={handleNamaPerusahaan}
                  required
                />
              </div>
              {/* Jabatan */}
              <div>
                <label
                  htmlFor="jabatan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Jabatan
                </label>
                <input
                  type="text"
                  name="jabatan"
                  id="jabatan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Jabatan"
                  value={jabatan}
                  onChange={handleChangeJabatan}
                  required
                />
              </div>
              {/* Tahun Masuk Kerja */}
              <div>
                <label
                  htmlFor="tahunMasukKerja"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Tahun Masuk Kerja
                </label>
                <input
                  type="number"
                  name="tahunMasukKerja"
                  id="tahunMasukKerja"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Tahun Masuk Kerja (2019)"
                  value={tahunMasuk}
                  onChange={handleChangeTahunMasuk}
                  required
                />
              </div>
              {/* Nama Universitas*/}
              <div>
                <label
                  htmlFor="namaUniversitas"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nama Universitas
                </label>
                <input
                  type="text"
                  name="namaUniversitas"
                  id="namaUniversitas"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Nama Universitas"
                  value={namaUniversitas}
                  onChange={handleChangeNamaUniversitas}
                  required
                />
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
                  to={"/admin/kerja-dan-kuliah"}
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

export default EditDataKerjaDanKuliahLayout;
