import axios from "axios";
import { mapAsteroidsData } from "../mappers/meteor.mapper.js";

export const getMeteorsData = async function (startDate, endDate) {
  return axios
    .get(process.env.API_URL, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: process.env.API_KEY,
      },
    })
    .then((response) => mapAsteroidsData(response.data))
    .catch((error) => {
      console.log(error.message);
    });
};
