import { useState, React } from "react";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin";
import DataTable from "react-data-table-component";
import FooterAdmin from "./FooterAdmin/FooterAdmin";
import { Link } from "react-router-dom";

const DaftarUserLayout = () => {
  const EditButton = () => (
    <Link to={"/admin/daftar-user/edit-data-user"}>
      <button
        className="text-white flex justify-center items-center border rounded-md w-8 h-8 bg-green-700"
        onClick={() => console.log("aku adalah aksi")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
    </Link>
  );

  const DeleteButton = () => (
    <button
      className="text-white flex justify-center items-center border rounded-md w-8 h-8 bg-red-700 ml-2"
      onClick={() => console.log("aku adalah delete")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  );
  const columns = [
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Tanggal Lahir",
      selector: (row) => row.tanggal_lahir,
      sortable: true,
    },
    {
      name: "Nomor Ijazah",
      selector: (row) => row.nomor_ijazah,
      sortable: true,
    },
    {
      name: "Jurusan",
      selector: (row) => row.jurusan,
      sortable: true,
    },
    {
      name: "Angkatan",
      selector: (row) => row.angkatan,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Nomor WA",
      selector: (row) => row.nomorWA,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Aksi",
      cell: (row) => (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
  ];

  const item = [
    {
      id: 1,
      nama: "Beetlejuice",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 1111",
      jurusan: "IPA",
      angkatan: "2020",
      email: "beetlejuice@gmail.com",
      nomorWA: "08924818591",
      username: "thebeetle",
    },
    {
      id: 2,
      nama: "Ghostbusters",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 2222",
      jurusan: "IPS",
      angkatan: "2018",
      email: "ghostbusters@gmail.com",
      nomorWA: "08924818591",
      username: "buster",
    },
    {
      id: 3,
      nama: "Abigail",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 3333",
      jurusan: "Bahasa",
      angkatan: "2019",
      email: "abigail@gmail.com",
      nomorWA: "08924818591",
      username: "abigail",
    },
    {
      id: 4,
      nama: "ThornPrincess",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 4444",
      jurusan: "IPA",
      angkatan: "2002",
      email: "yorforger@gmail.com",
      nomorWA: "08924818591",
      username: "killer",
    },
    {
      id: 5,
      nama: "Beetlejuice",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 5555",
      jurusan: "IPS",
      angkatan: "2002",
      email: "batler@gmail.com",
      nomorWA: "08924818591",
      username: "ayobrantem",
    },
    {
      id: 6,
      nama: "Ghostbusters",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 1111",
      jurusan: "IPA",
      angkatan: "2002",
      email: "thejackmania@gmail.com",
      nomorWA: "08924818591",
      username: "jackpastimenang",
    },
    {
      id: 7,
      nama: "Abigail",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 4444",
      jurusan: "IPA",
      angkatan: "2002",
      email: "abigaillah@gmail.com",
      nomorWA: "08924818591",
      username: "killer",
    },
    {
      id: 8,
      nama: "ThornPrincess",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 4444",
      jurusan: "IPS",
      angkatan: "1999",
      email: "yotihime@gmail.com",
      nomorWA: "08924818591",
      username: "peanuts",
    },
    {
      id: 9,
      nama: "Beetlejuice",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 1111",
      jurusan: "IPA",
      angkatan: "1999",
      email: "kitabersama@gmail.com",
      nomorWA: "08924818591",
      username: "bisayobisa",
    },
    {
      id: 10,
      nama: "Ghostbusters",
      tanggal_lahir: "11/09/2002",
      nomor_ijazah: "DN 3333",
      jurusan: "Bahasa",
      angkatan: "2019",
      email: "abigail@gmail.com",
      nomorWA: "08924818591",
      username: "abigail",
    },
    {
      id: 11,
      nama: "Abigail",
      tanggal_lahir: "11/09/2002",
      nomor_ijazah: "DN 3333",
      jurusan: "IPA",
      angkatan: "2019",
      email: "abigail@gmail.com",
      nomorWA: "08924818591",
      username: "abigail",
    },
    {
      id: 12,
      nama: "ThornPrincess",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 3333",
      jurusan: "IPS",
      angkatan: "2019",
      email: "abigail@gmail.com",
      nomorWA: "08924818591",
      username: "abigail",
    },
    {
      id: 13,
      nama: "Beetlejuice",
      tanggal_lahir: "1/09/2002",
      nomor_ijazah: "DN 3333",
      jurusan: "Bahasa",
      angkatan: "2020",
      email: "asdasd@gmail.com",
      nomorWA: "08924818591",
      username: "yaelah",
    },
    {
      id: 14,
      nama: "iniapaasih",
      tanggal_lahir: "29/09/2023",
      nomor_ijazah: "DN 1111",
      jurusan: "IPA",
      angkatan: "2020",
      email: "covid@gmail.com",
      nomorWA: "08924818591",
      username: "luluskarnacovid",
    },
    {
      id: 15,
      nama: "yoigasih",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 1111",
      jurusan: "IPS",
      angkatan: "2020",
      email: "yailah@gmail.com",
      nomorWA: "08924818591",
      username: "siapberantem",
    },
    {
      id: 16,
      nama: "siapaini",
      tanggal_lahir: "11/09/2023",
      nomor_ijazah: "DN 1111",
      jurusan: "Bahasa",
      angkatan: "2020",
      email: "siapaajaboleh@gmail.com",
      nomorWA: "08924818591",
      username: "siapa",
    },
  ];

  const [records, setRecords] = useState(item);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const newData = item.filter((row) => {
      return (
        row.nama.toLowerCase().includes(value) ||
        row.nomor_ijazah.toString().toLowerCase().includes(value) ||
        row.jurusan.toString().toLowerCase().includes(value) ||
        row.angkatan.toString().toLowerCase().includes(value) ||
        row.email.toString().toLowerCase().includes(value) ||
        row.username.toString().toLowerCase().includes(value)
      );
    });
    setRecords(newData);
  };
  return (
    <div>
      <SidebarAdmin />
      <div className="md:absolute md:left-60 md:top-14 p-8 md:w-10/12 w-screen md:mt-0 mt-10">
        <h1 className="font-semibold">Daftar User</h1>
        <div className="text-end">
          <input
            type="text"
            className=" border text-gray-900 sm:text-sm p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
            placeholder="Search..."
            onChange={handleFilter}
          />
        </div>
        <DataTable
          columns={columns}
          data={records}
          fixedHeader
          fixedHeaderScrollHeight="450px"
          pagination
          highlightOnHover
        ></DataTable>
      </div>
      <div className="md:absolute inset-x-0 bottom-0 ">
        <FooterAdmin />
      </div>
    </div>
  );
};

export default DaftarUserLayout;
