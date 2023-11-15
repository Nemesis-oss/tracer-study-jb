import React from 'react';

const Banner = ({ img, Jenis }) => {
    return (
        <div className='relative'>
            <img className="object-cover min-w-full h-80 bg-auto bg-center brightness-50" alt='ini gambar' src={img} />
            <div className='absolute top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 text-white text-center '>
                <p className='text-xl md:text-3xl'>Untuk menambahkan data. Silahkan pilih menu "Profile" dan pilih tombol status.</p>
                <p className='text-lg mt-3'>Menampilkan Data Alumni Dengan Status <span className='font-bold'>{Jenis}</span></p>
            </div>
        </div>
    );
} 

export default Banner;
