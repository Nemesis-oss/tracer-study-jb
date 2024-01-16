import { React, useEffect, useState } from 'react';
import api from '../../../api';
import { Pagination } from 'antd';

const TableMencariKerja = () => {
    const [mencarKerja, setMencariKerja] = useState([]);
    const [total, setTotal] = useState("");
    const [page, setPage] = useState(1);
    const [postPerPage, setPostPerpage] = useState(10);
    const [search, setSearch] = useState("");

    const readAll = async () => {
        try {
            const response = await api.get('/mencari-kerja/all');
            const mencariKerja = response.data.data
            setMencariKerja(mencariKerja);
            setTotal(mencariKerja.length);
        } catch (error) {
            console.log(error);
        }
    };

    const lastPage = page * postPerPage;
    const firstPage = lastPage - postPerPage;
    const currentPost = mencarKerja.slice(firstPage, lastPage);

    useEffect(() => {
        readAll();
    }, []);

    const determineColumns = () => {
        return total <= 3 ? 'md:flex justify-center' : 'md:grid-cols-5';
    };

    const onShowSizeChange = (current, pageSize) => {
        const lastPage = Math.ceil(total / pageSize);
        setPage(page > lastPage ? lastPage : page);
        setPostPerpage(pageSize);
    }

    const itemRender = (current, type, originalElement) => {
        if (type === "prev" || type === "next") {
            return <a>{type === "prev" ? "Previous" : "Next"}</a>;
        }
        return originalElement;
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    return (
        <div className='m-5'>
            <div className='flex justify-center'>
                <div className='relative'>
                    <input
                        type="text"
                        className='rounded-full m-3 pl-3 pr-10 border text-gray-900 sm:text-sm p-1.5 dark:border-gray-600'
                        placeholder='Search...'
                        onChange={handleSearchChange}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="absolute top-1/2 transform -translate-y-1/2 right-5 w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>
            </div>
            <div className={`grid grid-cols-1 ${determineColumns()} gap-4 mt-5`}>
                {currentPost.filter(
                    (e) =>
                        e.nama.toLowerCase().includes(search) ||
                        e.angkatan.toString().toLowerCase().includes(search) ||
                        e.alamat.toLowerCase().includes(search) 
                ).map((mencariKerja) => (
                    <div key={mencariKerja.user} className="w-full max-w-sm border shadow-lg shadow-cyan-950/50 relative transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <div className="h-40 relative">
                            <div className="bg-gradient-to-b from-cyan-950 to-white h-full"></div>
                            <img
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full shadow-lg border border-cyan-700"
                                src={mencariKerja.urlGambar}
                                alt={mencariKerja.nama}
                            />
                        </div>
                        <div className="flex flex-col items-center pb-10 pt-10 bg-white">
                            <h5 className="mb-1 text-center text-2xl font-medium dark:text-[#F6B352]">
                                {mencariKerja.nama}
                            </h5>
                            <span className="text-base text-center">Angkatan <a className='font-semibold'>{mencariKerja.angkatan}</a></span>
                            <span className="text-base text-center">Pendidikan Akhir <a className='font-semibold'>{mencariKerja.pendidikan_akhir}</a></span>
                            <span className="text-base text-center">Email <a className='font-semibold'>{mencariKerja.email}</a></span>
                            <span className="text-base text-center">Alamat <a className='font-semibold'>{mencariKerja.alamat}</a></span>
                            <span className="text-base text-justify p-3">Alasan <a className='font-semibold'>{mencariKerja.alasan}</a></span>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div className='text-center mt-6'>
                <Pagination
                    onChange={(value) => setPage(value)}
                    pageSize={postPerPage}
                    total={total}
                    current={page}
                    showSizeChanger
                    showQuickJumper
                    onShowSizeChange={onShowSizeChange}
                    itemRender={itemRender}
                />
            </div>
        </div>
    );
};

export default TableMencariKerja;
