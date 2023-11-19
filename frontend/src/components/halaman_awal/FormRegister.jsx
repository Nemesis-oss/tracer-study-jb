import React, { useState } from "react";
import jb from "../../images/logoJB.png";
import api from "../../api.js";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [nama, setNama] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [nomor_ijazah, setNomorIjsazah] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [email, setEmail] = useState("");
  const [nomor_WA, setNomorWA] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [konfrmPassword, setKonfrmPassword] = useState("");
  const [alertt, setAlert] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showKonfPass, setKonfPass] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChangeName = (e) => {
    const value = e.target.value;
    setNama(value);
    setError("");
  };

  const handleChangeTgl = (e) => {
    const value = e.target.value;
    setTanggalLahir(value);
    setError("");
  };

  const handleChangeNoIjazah = (e) => {
    const value = e.target.value;
    setNomorIjsazah(value);
    setError("");
  };
  const handleChangeJurusan = (e) => {
    const value = e.target.value;
    setJurusan(value);
    setError("");
  };
  const handleChangeAngkatan = (e) => {
    const value = e.target.value;
    setAngkatan(value);
    setError("");
  };
  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };
  const handleChangeNoWA = (e) => {
    const value = e.target.value;
    setNomorWA(value);
    const valueNum = value.replace(/\D/g, "");
    setNomorWA(valueNum);
    setError("");
  };
  const handleChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setError("");
  };
  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");

    if (konfrmPassword !== "") {
      setPasswordMatchError(value !== konfrmPassword);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleKonfPassdVisibility = () => {
    setKonfPass(!showKonfPass);
  };

  const handleChangeKonfirPass = (e) => {
    const value = e.target.value;
    setKonfrmPassword(value);

    if (password !== "") {
      setPasswordMatchError(password !== value);
    }
  };

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
  };

  const resetForm = () => {
    setNama("");
    setTanggalLahir("");
    setNomorIjsazah("");
    setJurusan("");
    setAngkatan("");
    setEmail("");
    setNomorWA("");
    setUsername("");
    setPassword("");
    setKonfrmPassword("");
  };

  const handleClickRegis = async (e) => {
    e.preventDefault();

    setAgreed(false);

    const data = {
      nama: nama,
      tanggal_lahir: tanggal_lahir,
      nomor_ijazah: nomor_ijazah,
      jurusan: jurusan,
      angkatan: angkatan,
      email: email,
      nomor_WA: nomor_WA,
      username: username,
      password: password
    }

    if (password !== konfrmPassword) {
      setPasswordMatchError(true);
      setError("Password dan Konfirmasi password harus sama!");
      setTimeout(() => {
        setError('')
      },5000)
      return;
    }

    try {
      const response = await api.post("/daftar", data);
      console.log("berhasil", response.data);
      resetForm();
      setAlert(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        setAlert('')
        setError('')
      }, 5000)
    }
  }


  return (
    <section className="relative">
      {/* gambar background */}
      <div className="fixed inset-0 bg-cover bg-center bg-[url('../images/back2.png')] brightness-50"> </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto relative z-10">
        {/* bagian alert berhasil*/}
        {alertt && (
          <div
            className="fixed top-0 h-16 inset-0 flex items-center p-4 mb-4  text-sm text-green-900 rounded-lg bg-green-200 dark:bg-green-100 dark:text-green-600"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            {alertt}
          </div>
        )}
        {error && (
          <div
            className="fixed top-0 h-16 inset-0 flex items-center p-4 mb-4 text-sm text-red-900 border border-red-500 rounded-lg bg-red-50  dark:text-red-600 dark:border-red-900"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            {error}
          </div>
        )}
        {/* tulisan de brito */}
        <Link
          to={"/"}
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={jb} alt="logo" />
          SMA Kolose De Britto
        </Link>
        {/* isi form (card) */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Register
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {/* Nama */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Masukan Nama"
                  value={nama}
                  onChange={handleChangeName}
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
                  id="jurursan"
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
                  placeholder="Masukan Angakatan (2019)"
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

              {/* Password */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-balck"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Masukan Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={handleChangePassword}
                  required
                />
                {password && (
                  <span
                    className="absolute top-9 right-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg
                        className="w-6 h-6 text-gray-500 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 14"
                      >
                        <g
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0.9}
                        >
                          <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-500 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0.9}
                          d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </span>
                )}
              </div>
              {/* Konfir Password */}
              <div className="relative">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Konfirmasi Password
                </label>
                <input
                  type={showKonfPass ? "text" : "password"}
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Masukan Konfirmasi Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={konfrmPassword}
                  onChange={handleChangeKonfirPass}
                  required
                />
                {konfrmPassword && (
                  <span
                    className="absolute top-9 right-3 cursor-pointer"
                    onClick={toggleKonfPassdVisibility}
                  >
                    {showKonfPass ? (
                      <svg
                        className="w-6 h-6 text-gray-500 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 14"
                      >
                        <g
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0.9}
                        >
                          <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-500 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0.9}
                          d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </span>
                )}
                {passwordMatchError && (
                  <p className="text-sm text-red-500">
                    Konfirmasi password tidak cocok dengan password.
                  </p>
                )}
              </div>
              {/* persetujuan */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    onChange={handleAgreementChange}
                    required
                    checked={agreed}
                  />
                </div>
                {/* tulisan persetujuan */}
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="dark:text-black">
                    I accept the{" "}
                    <Link
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              {/* {/* button regis */}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className={`${
                    !agreed
                      ? "w-full font-medium cursor-not-allowed bg-gray-300 rounded-lg text-sm px-5 py-2.5 text-center"
                      : "w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black"
                  }`}
                  onClick={handleClickRegis}
                  disabled={!agreed || passwordMatchError}
                >
                  Register
                </button>
                <Link
                  to={"/"}
                  className="w-full text-white hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-400 hover:dark:text-black"
                >
                  <button type="submit">Back</button>
                </Link>
              </div>
              {/* kembali ligon */}
              <p className="text-sm font-light text-gray-700 dark:text-gray-700">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormRegister;
