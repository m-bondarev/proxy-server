import axios from 'axios';
import { mapAsteroidsData } from '../mappers/meteor.mapper.js';
import { previousWorkWeek } from '../utils/dateUtils.js';
import { environment } from '../config/environment.js';

export const getMeteorsData = function (request, next) {
  const date = request.date ?? new Date();
  const datesObject = previousWorkWeek(date);

  return axios
    .get(environment.nasa.meteorsApiUrl, {
      params: {
        start_date: datesObject.START_DATE,
        end_date: datesObject.END_DATE,
        api_key: environment.nasa.apiKey,
      },
    })
    .then((response) => mapAsteroidsData(request, response.data))
    .catch((error) => next(error));
};
