import { getMeteorsData } from "../services/meteors.service.js";
import { START_DATE, END_DATE } from "../utils/dateUtils.js";

export const getMeteors = async (req, res) => {
  try {
    const data = await getMeteorsData(START_DATE, END_DATE);

    res.json(data);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ message: "Error fetching data from NASA API" });
  }
};
