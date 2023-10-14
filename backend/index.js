import express from "express";
import bodyParser from "body-parser";
import routerUser from "./routes/user.routes.js";
import routerIjazah from "./routes/no.ijazah.routes.js";
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

app.use(bodyParser.json());
app.use(routerUser);
app.use(routerIjazah);
app.use(cors());

// mengecek apakah server berjalan tidak
app.listen(process.env.PORT, () => console.log("Server port 5000 Berjalan.."));
