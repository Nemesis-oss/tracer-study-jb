import React from "react";
import Reveal, { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="md:flex md:justify-center md:space-x-4 md:my-20 mt-[40%]">
      {/* Membungkus dua kartu dengan tata letak fleksibel pada tampilan tertentu */}
      <Slide>
        <div className="max-w-xl p-6 mx-8 bg-white border border-gray-200 rounded-lg">
          {/* Tanda "BACA SELENGKAPNYA" yang kecil  */}
          <div className="text-sm text-center text-gray-400 tracking-[.25em]">
            {" "}
            BACA SELENGKAPNYA
          </div>
          {/* Garis pemisah */}
          <hr className="" />
          {/* Judul kartu pertama dengan tautan */}
          <Link to={"/"}>
            <h5 className="mb-2 text-3xl tracking-tight text-gray-900 dark:text-black text-center">
              SMA Kolese De Britto
            </h5>
          </Link>
          {/* Deskripsi kartu pertama */}
          <p className="mb-3 font-normal text-gray-400 p-6 text-justify">
            Kolese De Britto (De Britto College atau yang lebih dikenal dengan
            akronim JB [jébé] yang berasal dari nama Johanes de Britto), adalah
            Sekolah Menengah Atas Katolik yang diasuh oleh Serikat Jesuit yang
            terletak di wilayah provinsi Daerah Istimewa Yogyakarta, Indonesia.
            Dibangun di atas tanah seluas 32.450 m². SMA ini termasuk salah satu
            SMA populer di Yogyakarta [5] dan terkenal karena prestasi di bidang
            akademis dan intelektual, olahraga, dan bidang non-akademis lainnya.
            Nama 'de Britto' sendiri didapat dari nama seorang Santo dan
            misionaris Portugal pada abad ke-17 yang berkarya di India, Johanes
            de Britto.
          </p>
          {/* Tombol "LEBIH LENGKAP" dengan ikon panah */}
          <div className="flex justify-center items-center">
            <Link
              to={"https://debritto.sch.id/"}
              className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-gray-400 hover:text-black hover:bg-gray-100 ring-offset-2 ring-1 ring-gray-300 hover:ring-black hover:ring-1 dark:bg-white dark:hover:bg-white-700 "
            >
              LEBIH LENGKAP
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Slide>
      <Slide direction="right">
        {/* Kartu kedua dengan deskripsi lainnya */}
        <div className="md:max-w-xl md:mt-0 mt-4 md:mb-0 mb-8 p-6 mx-8 bg-white border border-gray-200 rounded-lg">
          <div className="text-sm text-center text-gray-400 tracking-[.25em]">
            {" "}
            BACA SELENGKAPNYA
          </div>
          <hr className="" />
          <Link to={"/"}>
            <h5 className="mb-2 text-3xl tracking-tight text-black text-center">
              Sistem Informasi Alumni
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-400 p-6 text-justify">
            Sistem Informasi Alumni atau yang sering disebut sebagai survey
            alumni atau survey “follow up” adalah studi mengenai lulusan lembaga
            penyelenggara pendidikan tinggi. Studi ini mampu menyediakan
            berbagai informasi yang bermanfaat bagi kepentingan evaluasi hasil
            pendidikan tinggi dan selanjutnya dapat digunakan untuk
            penyempurnaan dan penjaminan kualitas lembaga pendidikan tinggi yang
            bersangkutan. Sistem Informasi Alumni juga bermanfaat dalam
            menyediakan informasi penting mengenai hubungan antara pendidikan
            tinggi dan dunia kerja professional, menilai relevansi pendidikan
            tinggi, informasi bagi pemangku kepentingan (stakeholders), dan
            kelengkapan persyaratan bagi akreditasi pendidikan tinggi.
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default Cards;
