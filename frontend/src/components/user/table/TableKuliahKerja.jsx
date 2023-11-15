import { React, useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import api from '../../../api';

const TableKuliahKerja = () => {
    const columns = [
        {
            name: "Nama",
            sortable: true,
            selector: row => row.nama,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.nama}</div>,

        },
        {
            name: "Angkatan",
            sortable: true,
            selector: row => row.angkatan,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.angkatan}</div>,

        },
        {
            name: "Nama Perusahaan",
            sortable: true,
            selector: row => row.nama_perusahaan,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.nama_perusahaan}</div>,

        },
        {
            name: "Jabatan",
            sortable: true,
            selector: row => row.jabatan,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.jabatan}</div>,

        },
        {
            name: "Tahun Kerja",
            sortable: true,
            selector: row => row.tahun_kerja
        },
        {
            name: "Universitas",
            sortable: true,
            selector: row => row.nama_universitas,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.nama_universitas}</div>,

        },
        {
            name: "Program Studi",
            sortable: true,
            selector: row => row.prodi,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.prodi}</div>,

        },
        {
            name: "Jenjang",
            sortable: true,
            selector: row => row.jenjang
        },
    ];

    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [filter, setFilter] = useState('');

    const handleFilter = (e) => {
        const value = e.target.value.toLowerCase();
        const filterData = data.filter((row) => {
            return (
                row.nama.toLowerCase().includes(value) ||
                row.angkatan.toString().toLowerCase().includes(value) ||
                row.nama_universitas.toLowerCase().includes(value) ||
                row.prodi.toLowerCase().includes(value) ||
                row.jenjang.toLowerCase().includes(value) ||
                row.nama_perusahaan.toLowerCase().includes(value) ||
                row.jabatan.toLowerCase().includes(value) ||
                row.tahun_kerja.toString().toLowerCase().includes(value)
            );
        });
        setFilter(filterData);
    };

    const readAllKuliah = async () => {
        try {
            const response = await api.get('/kuliah-kerja/all');
            setData(response.data.data);
            setFilter(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        const timeout = setTimeout(() => {
            setPending(false);
            readAllKuliah();
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: "#0D98BA",
                color: "white",
            }
        },
        headCells: {
            style: {
                fontSize: "15px",
                textTransform: "uppercase"
            }
        },
        cells: {
            style: {
                fontSize: "15px",
            }
        }
    };

    return (
        <div className='p-5'>
            <div className='text-end mb-2'>
                <input type="text" className=" border text-gray-900 sm:text-sm p-1.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder='Search...' onChange={handleFilter} />
            </div>
            <DataTable
                columns={columns}
                data={filter}
                customStyles={customStyles}
                progressPending={pending}
                pagination
                fixedHeader
            />
        </div>
    );
};

export default TableKuliahKerja;
