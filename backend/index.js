import express from "express";
import bodyParser from "body-parser";
import routerUser from "./routes/user.routes.js";
import routerIjazah from "./routes/no.ijazah.routes.js";
import routerKuliah from "./routes/kuliah.routes.js";
import routerKerja from "./routes/kerja.routes.js";
import routerKuliahKerja from "./routes/kuliah.kerja.routes.js";
import routerMencariKerja from "./routes/mencari.kerja.routes.js";
import routerUsaha from "./routes/usaha.routes.js";
import routerGrafik from "./routes/grafik.routes.js";
import routerUniversitas from "./routes/universitas.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Terkoneksi Data Base..."));
// db.createCollection("coba2")

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(bodyParser.json());
app.use(routerUser);
app.use(routerIjazah);
app.use("/public", express.static("public"));
app.use(routerKuliah);
app.use(routerKerja);
app.use(routerKuliahKerja);
app.use(routerMencariKerja);
app.use(routerUsaha);
app.use(routerGrafik);
app.use(routerUniversitas);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Terjadi kesalahan dalam server." });
});

// mengecek apakah server berjalan tidak
app.listen(process.env.PORT, () =>
  console.log(`Server port ${process.env.PORT} Berjalan..`)
);
