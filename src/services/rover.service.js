import axios from 'axios';
import { format } from 'date-fns';
import { DATE_TEMPLATE } from '../constants/constants.js';
import { environment } from '../config/environment.js';

const roverBasePath = environment.nasa.roverApiUrl;

const getRoverInfo = async (apiKey) => {
  const infoResponse = await axios.get(roverBasePath, {
    params: {
      api_key: apiKey,
    },
  });

  return infoResponse.data;
};

export const getRoverPhoto = async (apiKey) => {
  const roverInfo = await getRoverInfo(apiKey);

  const maxDate = new Date(roverInfo.rover.max_date);
  const dateFormatted = format(maxDate, DATE_TEMPLATE);

  const roverPhotoResponse = await axios.get(roverBasePath + '/photos', {
    params: {
      earth_date: dateFormatted,
      api_key: apiKey,
    },
  });

  return roverPhotoResponse.data.photos.pop().img_src;
};
