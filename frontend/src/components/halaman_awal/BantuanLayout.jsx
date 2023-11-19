import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
const BantuanLayout = () => {
  return (
    <div className="bg-[#242c34]">
      <div className="bg-[#242c34]">
        <div>.</div>
        <Navbar />
      </div>
      <div className="mt-10">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //kotak
            contentStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
            //panah kanan dari kotak
            contentArrowStyle={{ borderRight: "7px solid  rgb(52,60,68)" }}
            // bulet bulet
            iconStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title text-2xl">
              Bagaimana Cara Mendaftar Akun?
            </h1>
            <p>
              Cuku pergi ke{" "}
              <Link className="hover:underline" to={"/"}>
                Halaman Utama
              </Link>{" "}
              lalu pilih Registrasi. Isi formulir yang diberikan lalu
              Registrasi.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //kotak
            contentStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
            //panah kanan dari kotak
            contentArrowStyle={{ borderRight: "7px solid  rgb(52,60,68)" }}
            // bulet bulet
            iconStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title text-2xl">
              Apa itu Sistem Informasi Alumni?
            </h1>
            <p>
              Sistem Informasi Alumni merupakan sebuah sistem dokumentasi
              Alumni. Disini kalian bisa mengupdate data kalian, serta
              mengetahui sebagian informasi Alumni.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //kotak
            contentStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
            //panah kanan dari kotak
            contentArrowStyle={{ borderRight: "7px solid  rgb(52,60,68)" }}
            // bulet bulet
            iconStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title text-2xl">
              Bagaimana cara menambahkan data saya?
            </h1>
            <p>
              Untuk menambahkan data anda di Sistem Informasi Alumni ini. Anda
              diharuskan untuk Login. Setelah itu anda bisa mengklik tombol menu
              dipojok kanan. Pilih nama anda lalu pilih tombol status.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //kotak
            contentStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
            //panah kanan dari kotak
            contentArrowStyle={{ borderRight: "7px solid  rgb(52,60,68)" }}
            // bulet bulet
            iconStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title text-2xl">
              Bagaimana cara saya mengedit data yang salah?
            </h1>
            <p>
              Jika anda tahu data yang benar, klik tombol Report dan pilih
              request edit data, setelah itu admin kami akan menvalidasi data
              tersebut. Jika data lolos validasi kami akan segera
              memperbaruinya.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //kotak
            contentStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
            //panah kanan dari kotak
            contentArrowStyle={{ borderRight: "7px solid  rgb(52,60,68)" }}
            // bulet bulet
            iconStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title text-2xl">
              Saya tidak ingin data saya ada disini!
            </h1>
            <p>
              Sebenarnya website ini dirancang untuk membiarkan user menambahkan
              banyak data sekaligus. Tentu dengan validasi dari Admin. Jika
              validasi lolos maka akan admin tampilkan. Bila tidak, maka
              permintaan penambahan user akan dihapus. Namun, bila anda tidak
              ingin data anda disini, anda bisa langsung menghubungi{" "}
              <Link
                to={"mailto:kolese@debritto.sch.id"}
                className="hover:underline"
              >
                kami
              </Link>{" "}
              .
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //kotak
            contentStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
            //panah kanan dari kotak
            contentArrowStyle={{ borderRight: "7px solid  rgb(52,60,68)" }}
            // bulet bulet
            iconStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title text-2xl">
              Saya menemukan bug/error. Apa yang harus saya lakukan?
            </h1>
            <p>
              Silahkan anda melapor kepada pihak kami untuk detail bug atau
              error tersebut melalui{" "}
              <Link
                to={"mailto:kolese@debritto.sch.id"}
                className="hover:underline"
              >
                email
              </Link>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //kotak
            contentStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
            //panah kanan dari kotak
            contentArrowStyle={{ borderRight: "7px solid  rgb(52,60,68)" }}
            // bulet bulet
            iconStyle={{ background: "rgb(52,60,68)", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title text-2xl text-center">
              Thank You ! !
            </h1>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default BantuanLayout;
