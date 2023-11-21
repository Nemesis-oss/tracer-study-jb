import React, { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";
import FooterAdmin from "../FooterAdmin/FooterAdmin";
import api from "../../../api"

const ChartAdmin = () => {
  const [dataCounts, setDataCounts] = useState([]);
  const [angkatanData, setAngkatanData] = useState([]);
  const [univData, setUnivData] = useState([]);
  const [pekerjaanData, setPekerjaanData] = useState([])


  const readGrafik = async () => {
    try {
      const penggunaResponse = await api.get("/grafik-pengguna");
      setDataCounts(penggunaResponse.data);

      const angkatanResponse = await api.get("/grafik-angkatan");
      setAngkatanData(angkatanResponse.data);
      console.log(angkatanResponse.data)

      const univResponse = await api.get("/grafik-universitas")
      setUnivData(univResponse.data)

      const pekerjaanResponse = await api.get("/grafik-pekerjaan")
      setPekerjaanData(pekerjaanResponse.data)
    } catch (error) {
      console.error("Error fetching data counts:", error);
    }
  };

  useEffect(() => {
    readGrafik();
  }, []);

  return (
    <div className="md:absolute md:left-60 md:top-14 p-8 md:w-10/12 w-screen mt-11 md:mt-0">
      <div className="md:grid grid-cols-2 gap-7">
        {/* Grafik Pengguna */}
        <div className="border-2 shadow-xl ">
          <h1 className="font-semibold p-3 text-[#4e80ee] text-bold">
            Grafik Pengguna
          </h1>
          <TEChart
            type="bar"
            data={{
              labels: dataCounts.map((data) => data.jenis),
              datasets: [
                {
                  label: "Jumlah",
                  data: dataCounts.map((data) => data.count),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              indexAxis: "y",
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "0C0F0F",
                  },
                },
              },
              scales: {
                x: {
                  stacked: true,
                  grid: {
                    display: true,
                    borderDash: [2],
                    zeroLineColor: "rgba(0,0,0,0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                  ticks: {
                    color: "#0C0F0F",
                  },
                },
                y: {
                  stacked: true,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: "#0C0F0F",
                  },
                },
              },
            }}
          />
        </div>
        {/* Grafik Angkatan */}
        <div className="p-3 border-2 shadow-xl">
          <h1 className="font-semibold text-[#4e80ee] text-bold">
            Grafik Angkatan
          </h1>
          <TEChart
            type="bar"
            data={{
              labels: angkatanData.map((data) => data._id),
              datasets: [
                {
                  label: "Jumlah",
                  data: angkatanData.map((data) => data.count),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#0C0F0F",
                  },
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#0C0F0F",
                  },
                },
                y: {
                  ticks: {
                    color: "#0C0F0F",
                  },
                },
              },
            }}
          />
        </div>
        {/* Grafik Universitas */}
        <div className="p-3 border-2 shadow-xl">
          <h1 className="font-semibold text-[#4e80ee] text-bold">
            Grafik Universitas{" "}
          </h1>
          <TEChart
            type="bar"
            data={{
              labels: univData.map((data) => data._id),
              datasets: [
                {
                  label: "Jumlah",
                  data: univData.map((data) => data.count),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              indexAxis: "y",
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "0C0F0F",
                  },
                },
              },
              scales: {
                x: {
                  stacked: true,
                  grid: {
                    display: true,
                    borderDash: [2],
                    zeroLineColor: "rgba(0,0,0,0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                  ticks: {
                    color: "#0C0F0F",
                  },
                },
                y: {
                  stacked: true,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: "#0C0F0F",
                  },
                },
              },
            }}
          />
        </div>

        {/* Grafik Pekerjaan */}
        <div className="p-3 border-2 shadow-xl">
          <h1 className="font-semibold text-[#4e80ee] text-bold">
            Grafik Pekerjaan
          </h1>
          <TEChart
            type="bar"
            data={{
              labels: pekerjaanData.map((data) => data._id),
              datasets: [
                {
                  label: "Jumlah",
                  data: pekerjaanData.map((data) => data.count),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "0C0F0F",
                  },
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#0C0F0F",
                  },
                },
                y: {
                  ticks: {
                    color: "#0C0F0F",
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div>
        <FooterAdmin />
      </div>
    </div>

  );
};

export default ChartAdmin;



{/* Grafik Pekerjaan */ }
{/* <div className="p-3 border-2 shadow-xl">
<h1 className="font-semibold text-[#4e80ee] text-bold">
  Grafik Pekerjaan
</h1>
<TEChart
  type="bar"
  data={{
    labels: ["buruh", "tani", "karyawan", "wiraswasta"],
    datasets: [
      {
        label: "Jumlah",
        data: [1.0, 4, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }}
  options={{
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "0C0F0F",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#0C0F0F",
        },
      },
      y: {
        ticks: {
          color: "#0C0F0F",
        },
      },
    },
  }}
/>
</div> */}