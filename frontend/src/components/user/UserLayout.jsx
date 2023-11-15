import React from "react";
import Navbar from "./Navbar/Navbar";
import bg from "../../video/bgJB.mp4"
import jb from "../../images/logoJB.png"


const UserLayout = () => {

    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto relative z-10">
                <div className=" absolute inset-0 bg-cover bg-center brightness-50 w-[100%] h-[100vh]">
                    <video className="w-[100%] h-[100%] object-cover" src={bg} autoPlay loop muted />
                </div>
                <div className="fixed top-[180px] md:top-52 flex flex-col items-center dark:text-white gap-2">
                    <img src={jb} alt="ini adalah logo" className="text-white w-20 h-20" />
                    <p className="font-bold text-2xl md:text-4xl text-orange-400 text-center">Selamat datang di Sistem Informasi Alumni</p>
                    <p className="w-[90%] md:w-[60%] text-xs md:text-2xl text-center">Sistem Informasi Alumni adalah studi tentang lulusan perguruan tinggi, memberikan informasi penting untuk evaluasi pendidikan tinggi dan peningkatan kualitas lembaga. Ini juga memfasilitasi pemahaman hubungan antara pendidikan tinggi dan dunia kerja, menilai relevansi pendidikan, serta menyediakan informasi untuk pemangku kepentingan dan akreditasi pendidikan tinggi.</p>
                </div>
            </div>
        </div>
    )
}

export default UserLayout