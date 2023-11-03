import { React, useEffect, useState } from 'react'
import DataTable from "react-data-table-component"
import api from '../../../api'

const TableKuliah = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])

    const columns = [
        {
            name: "Nama",
            selector: (row) => row.nama
        },
        {
            name: "Nama Panggilan",
            selector: (row) => row.nama_panggilan
        },
        {
            name: "Pendidikan Terakhir",
            selector: (row) => row.pendidikan_terakhir
        },
        {
            name: "Angkatan",
            selector: (row) => row.angkatan
        },
        {
            name: "Universitas",
            selector: (row) => row.universitas
        },
        {
            name: "Jurusan",
            selector: (row) => row.jurusan
        },
        {
            name: "Jenjang",
            selector: (row) => row.jenjang
        },
    ]

    const getTable = async () => {
        try {
            const response = await api.get("/kuliah", columns)
            setData(response)
            setFilter(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTable();
    }, [])



    return (
        <div>
            <DataTable />
        </div>
    )
}

export default TableKuliah