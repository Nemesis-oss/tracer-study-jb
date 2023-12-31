import { React, useState } from "react";
import { Link } from "react-router-dom";

const EditDataUserLayout = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
  };

  const [nama, setNama] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [nomor_ijazah, setNomorIjsazah] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [email, setEmail] = useState("");
  const [nomor_WA, setNomorWA] = useState("");
  const [username, setUsername] = useState("");

  const handleNama = (e) => {
    const value = e.target.value;
    setNama(value);
  };
  const handleChangeTgl = (e) => {
    const value = e.target.value;
    setTanggalLahir(value);
  };
  const handleChangeNoIjazah = (e) => {
    const value = e.target.value;
    setNomorIjsazah(value);
  };
  const handleChangeJurusan = (e) => {
    const value = e.target.value;
    setJurusan(value);
  };
  const handleChangeAngkatan = (e) => {
    const value = e.target.value;
    setAngkatan(value);
  };
  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleChangeNoWA = (e) => {
    const value = e.target.value;
    setNomorWA(value);
    const valueNum = value.replace(/\D/g, "");
    setNomorWA(valueNum);
  };
  const handleChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
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
              Edit Data User
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
              {/* Tanggal lahir */}
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Tanggal Lahir
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"></div>
                <input
                  datepicker="true"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder=""
                  value={tanggal_lahir}
                  onChange={handleChangeTgl}
                  required
                />
              </div>

              {/* Nomor Ijazah */}
              <div>
                <label
                  htmlFor="ijazah"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nomor Ijazah
                </label>
                <input
                  type="text"
                  name="ijazah"
                  id="ijazah"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Nomor Ijazah"
                  value={nomor_ijazah}
                  onChange={handleChangeNoIjazah}
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
                <select
                  id="jurusan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={jurusan}
                  onChange={handleChangeJurusan}
                >
                  <option value="">Pilih Jurusan</option>
                  <option value="bahasa">Bahasa</option>
                  <option value="ipa">IPA</option>
                  <option value="ips">IPS</option>
                </select>
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
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Email"
                  value={email}
                  onChange={handleChangeEmail}
                  required
                />
              </div>
              {/* Nomor WA */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nomor WA
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Nomor"
                  value={nomor_WA}
                  onChange={handleChangeNoWA}
                  required
                />
              </div>
              {/* username */}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Username"
                  value={username}
                  onChange={handleChangeUsername}
                  required
                />
              </div>
              {/* {/* button update */}
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
                  to={"/admin/daftar-user"}
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

export default EditDataUserLayout;
