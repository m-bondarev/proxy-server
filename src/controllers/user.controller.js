import { getRoverPhoto } from '../services/rover.service.js';
import { processUser } from '../services/user.service.js';

export const postUser = async (req, res, next) => {
  try {
    processUser(req);

    const roverPhotoUrl = await getRoverPhoto(req.body.api_key);
    res.send(`<img src="${roverPhotoUrl}" alt="The last rover photo should have appeared here :(">`);
  } catch (error) {
    next(error);
  }
};
