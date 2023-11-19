import { React, useState } from "react";
import { Link } from "react-router-dom";

const EditDataIjazahLayout = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
  };

  const [nama, setNama] = useState("");
  const [nomorIjazah, setNomorIjazah] = useState("");

  const handleNomorIjazah = (e) => {
    const value = e.target.value;
    setNomorIjazah(value);
  };

  const handleNama = (e) => {
    const value = e.target.value;
    setNama(value);
    
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-[40%] md:py-[10%] mx-auto relative z-10">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('../images/back2.png')] brightness-50 z-0">
        {" "}
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 z-20">
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
