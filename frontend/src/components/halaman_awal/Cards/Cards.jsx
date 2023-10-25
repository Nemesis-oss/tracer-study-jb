import React from "react";
import img4 from "../../images/img-2.png";

const Cards = () => {
  return (
    <div className="md:flex md:justify-center md:space-x-60 md:mt-4">
      {/* Membuat kontainer flex untuk meletakkan dua kartu secara berdampingan ketika screen MD */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* Kartu pertama */}
        <a href="https://debritto.sch.id/">
          <img className="rounded-t-lg" src={img4} alt="" />
        </a>
        <div className="p-5">
          <a href="https://debritto.sch.id/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SMA Kolese De Britto
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Kolese De Britto (De Britto College atau yang lebih dikenal dengan akronim JB [jébé] yang berasal dari nama Johanes de Britto), adalah Sekolah Menengah Atas Katolik yang diasuh oleh Serikat Jesuit yang terletak di wilayah provinsi Daerah Istimewa Yogyakarta, Indonesia. Dibangun di atas tanah seluas 32.450 m². SMA ini termasuk..
          </p>
          <a
            href="https://debritto.sch.id/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
          >
            Baca Selengkapnya
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
          </a>
        </div>
      </div>
      {/* Kartu kedua (sama seperti kartu pertama) */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://debritto.sch.id/">
          <img className="rounded-t-lg" src={img4} alt="" />
        </a>
        <div className="p-5">
          <a href="https://debritto.sch.id/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center">
              Sistem Informasi Alumni
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Sistem Informasi Alumni atau yang sering disebut sebagai survey alumni atau survey “follow up” adalah studi mengenai lulusan lembaga penyelenggara pendidikan tinggi. Studi ini mampu menyediakan berbagai informasi yang bermanfaat bagi kepentingan evaluasi hasil pendidikan tinggi dan selanjutnya dapat digunakan untuk penyempurnaan dan penjaminan kualitas lembaga pendidikan tinggi yang...
          </p>
          <a
            href="https://debritto.sch.id/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
          >
            Baca Selengkapnya
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
