import { useState, React } from "react";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
import DataTable from "react-data-table-component";
import FooterAdmin from "../FooterAdmin/FooterAdmin";
import { Link } from "react-router-dom";

const KerjaDanKuliahLayout = () => {
  const EditButton = () => (
    <Link to={"/admin/kerja-dan-kuliah/edit-data-kerja-dan-kuliah"}>
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
  // const navigate = useNavigate();
  const columns = [
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Angkatan",
      selector: (row) => row.angkatan,
      sortable: true,
    },
    {
      name: "Nama Perusahaan",
      selector: (row) => row.perusahaan,
      sortable: true,
    },
    {
      name: "Jabatan",
      selector: (row) => row.jabatan,
      sortable: true,
    },
    {
      name: "Tahun Kerja",
      selector: (row) => row.tahun_kerja,
      sortable: true,
    },
    ,
    {
      name: "Nama Universitas",
      selector: (row) => row.universitas,
      sortable: true,
    },
    {
      name: "Jurusan",
      selector: (row) => row.jurusan,
      sortable: true,
    },
    {
      name: "Jenjang",
      selector: (row) => row.jenjang,
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
      angkatan: "1988",
      perusahaan: "Indosat",
      jabatan: "Karyawan",
      tahun_kerja: "2019",
      universitas: "SanataDharma",
      jurusan: "ABC",
      jenjang: "S1",
    },
    {
      id: 2,
      nama: "Ghostbusters",
      angkatan: "1988",
      perusahaan: "XL",
      jabatan: "Karyawan",
      tahun_kerja: "2020",
      universitas: "PPPP",
      jurusan: "ZCXZC",
      jenjang: "S3",
    },
    {
      id: 3,
      nama: "Abigail",
      angkatan: "1988",
      perusahaan: "Indosat",
      jabatan: "Karyawan",
      tahun_kerja: "2019",
      universitas: "PoliceLine",
      jurusan: "Polantas",
      jenjang: "D3",
    },
    {
      id: 4,
      nama: "ThornPrincess",
      angkatan: "1988",
      perusahaan: "XL",
      jabatan: "Karyawan",
      tahun_kerja: "2020",
      universitas: "Disitu",
      jurusan: "kemana",
      jenjang: "S2",
    },
    {
      id: 5,
      nama: "Beetlejuice",
      angkatan: "1988",
      perusahaan: "Indosat",
      jabatan: "Karyawan",
      tahun_kerja: "2019",
      universitas: "SanataDharma",
      jurusan: "ABC",
      jenjang: "S1",
    },
    {
      id: 6,
      nama: "Ghostbusters",
      angkatan: "1988",
      perusahaan: "XL",
      jabatan: "Karyawan",
      tahun_kerja: "2020",
      universitas: "Disitu",
      jurusan: "kemana",
      jenjang: "S2",
    },
    {
      id: 7,
      nama: "Abigail",
      angkatan: "1988",
      perusahaan: "Indomaret",
      jabatan: "Kasir",
      tahun_kerja: "2023",
      universitas: "PoliceLine",
      jurusan: "Polantas",
      jenjang: "D3",
    },
    {
      id: 8,
      nama: "ThornPrincess",
      angkatan: "1988",
      perusahaan: "Indosat",
      jabatan: "Karyawan",
      tahun_kerja: "2019",
      universitas: "SanataDharma",
      jurusan: "ABC",
      jenjang: "S1",
    },
    {
      id: 9,
      nama: "Beetlejuice",
      angkatan: "1988",
      perusahaan: "XL",
      jabatan: "Karyawan",
      tahun_kerja: "2020",
      universitas: "Disitu",
      jurusan: "kemana",
      jenjang: "S2",
    },
    {
      id: 10,
      nama: "Ghostbusters",
      angkatan: "1988",
      perusahaan: "Indomaret",
      jabatan: "Kasir",
      tahun_kerja: "2023",
      universitas: "PoliceLine",
      jurusan: "Polantas",
      jenjang: "D3",
    },
    {
      id: 11,
      nama: "Abigail",
      angkatan: "1988",
      perusahaan: "XL",
      jabatan: "Karyawan",
      tahun_kerja: "2020",
      universitas: "SanataDharma",
      jurusan: "ABC",
      jenjang: "S1",
    },
    {
      id: 12,
      nama: "ThornPrincess",
      angkatan: "1988",
      perusahaan: "Indosat",
      jabatan: "Karyawan",
      tahun_kerja: "2019",
      universitas: "PoliceLine",
      jurusan: "Polantas",
      jenjang: "D3",
    },
    {
      id: 13,
      nama: "Beetlejuice",
      angkatan: "1988",
      perusahaan: "XL",
      jabatan: "Karyawan",
      tahun_kerja: "2020",
      universitas: "Disitu",
      jurusan: "kemana",
      jenjang: "S2",
    },
    {
      id: 14,
      nama: "Ghostbusters",
      angkatan: "1988",
      perusahaan: "Indomaret",
      jabatan: "Kasir",
      tahun_kerja: "2023",
      universitas: "PoliceLine",
      jurusan: "Polantas",
      jenjang: "D3",
    },
    {
      id: 15,
      nama: "Woy",
      angkatan: "1988",
      perusahaan: "Indosat",
      jabatan: "Karyawan",
      tahun_kerja: "2019",
      universitas: "SanataDharma",
      jurusan: "ABC",
      jenjang: "S1",
    },
    {
      id: 16,
      nama: "ThornPrincess",
      angkatan: "1988",
      perusahaan: "XL",
      jabatan: "Karyawan",
      tahun_kerja: "2020",
      universitas: "PoliceLine",
      jurusan: "Polantas",
      jenjang: "D3",
    },
  ];

  const [records, setRecords] = useState(item);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const newData = item.filter((row) => {
      return (
        row.nama.toLowerCase().includes(value) ||
        row.angkatan.toString().toLowerCase().includes(value) ||
        row.perusahaan.toLowerCase().includes(value) ||
        row.jabatan.toLowerCase().includes(value) ||
        row.tahun_kerja.toString().toLowerCase().includes(value) ||
        row.universitas.toLowerCase().includes(value) ||
        row.jurusan.toLowerCase().includes(value) ||
        row.jenjang.toLowerCase().includes(value)
      );
    });
    setRecords(newData);
  };

  return (
    <div>
      <SidebarAdmin />
      <div className="md:absolute md:left-60 md:top-14 p-8 md:w-10/12 w-screen md:mt-0 mt-10 z-10">
        <h1 className="font-semibold">Tabel Kerja dan Kuliah</h1>
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
      <div className="md:absolute inset-x-0 bottom-0 z-0">
        <FooterAdmin />
      </div>
    </div>
  );
};

export default KerjaDanKuliahLayout;
