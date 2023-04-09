import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import * as fs from "fs";
import * as https from "https";
import * as cors from "cors";
// import { path } from require("path");
const app = express();
import bodyParser from 'body-parser';
import router from "./routes/index.js";

import * as mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`)
    .then(() => console.log(`Connected to ${process.env.MONGO_DB} database`))
    .catch((e) => console.error(e));

// app.use(cors({
//     origin: "*"
// }))

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("views", "views");

app.set("view engine", "ejs");

app.use(router);

const server = https.createServer({
    key: fs.readFileSync("cert/privkey.pem"),
    cert: fs.readFileSync("cert/cert.pem")
}, app);

server.listen(process.env.APP_PORT, console.log(`Listening at port ${process.env.APP_PORT}`));
