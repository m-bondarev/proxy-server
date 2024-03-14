import axios from 'axios';
import { format } from 'date-fns';

const roverBasePath = process.env.ROVER_API_URL;

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
  const dateFormatted = format(maxDate, process.env.DATE_TEMPLATE);

  const roverPhotoResponse = await axios.get(roverBasePath + '/photos', {
    params: {
      earth_date: dateFormatted,
      api_key: apiKey,
    },
  });

  return roverPhotoResponse.data.photos.pop().img_src;
};
