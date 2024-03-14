import { mapQueryToUserRequest } from '../mappers/';
import { roverPhotoService } from '../services/rover.service.js';
import { processUser } from '../services/user.service.js';

export const postUser = async (req, res, next) => {
  try {
    processUser(req);

    const roverPhotoUrl = await roverPhotoService.getRoverPhotoUrl();
    res.send(`<img src="${roverPhotoUrl}">`);
  } catch (error) {
    next(error);
  }
};
