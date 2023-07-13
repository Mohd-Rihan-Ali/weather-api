import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import weatherRoute from "./routes/weatherRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/getWeather", function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.use("/", weatherRoute);

app.get("/", (req, res) => {
  res.send(
    "Weather API is running... for wheather updates do visit..... http://localhost:3000/getWeather"
  );
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
