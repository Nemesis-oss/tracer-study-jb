import { React, useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import api from '../../../api';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';

const TableUsaha = () => {
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
            selector: row => row.angkatan
        },
        {
            name:"Pendidikan Terakhir",
            sortable:true,
            selector:row => row.pendidikan_akhir
        },
        {
            name:"Jenis Usaha",
            sortable:true,
            selector:row => row.jenis_usaha,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.jenis_usaha}</div>,

        },
        {
            name:"Alamat Usaha",
            sortable:true,
            selector:row => row.alamat_usaha,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.alamat_usaha}</div>,
        },
        {
            name: "Tahun Usaha",
            sortable: true,
            selector: row => row.tahun_usaha,
            cell: (row) => <div style={{ whiteSpace: 'normal', height: 'auto' }}>{row.tahun_usaha}</div>,
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
                row.pendidikan_akhir.toLowerCase().includes(value) ||
                row.jenis_usaha.toLowerCase().includes(value) ||
                row.alamat_usaha.toLowerCase().includes(value) ||
                row.tahun_usaha.toString().toLowerCase().includes(value)
            );
        });
        setFilter(filterData);
    };

    const readAllKuliah = async () => {
        try {
            const response = await api.get('/usaha/all');
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

export default TableUsaha;
