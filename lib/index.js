import express from "express";
import axios from "axios";
import DateUtils from "../utils/dateUtils.js";

const app = express();

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Running on port ${process.env.PORT}`);
});

app.get("/meteors", async (req, res) => {
  await axios
    .get(process.env.API_URL, {
      params: {
        start_date: DateUtils.dates().yesterday,
        end_date: DateUtils.dates().today,
        api_key: process.env.API_KEY,
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);

      res.status(500).json({ message: "Error fetching data from NASA API" });
    });
});
