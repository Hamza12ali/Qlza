import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import { url } from "inspector";


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const app = express();