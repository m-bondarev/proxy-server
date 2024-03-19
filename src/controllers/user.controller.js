import { getRoverPhoto } from '../services/rover.service.js';
import { processUser } from '../services/user.service.js';
import Sentry from '@sentry/node';

export const postUser = async (req, res, next) => {
  try {
    Sentry.captureEvent({
      message: 'Most recent photo request by user',
      user: {
        id: req.body.user_id,
      },
      level: 'info',
    });

    processUser(req);

    const roverPhotoUrl = await getRoverPhoto(req.body.api_key);
    res.send(
      `<img src="${roverPhotoUrl}" alt="The last rover photo should have appeared here :(">`,
    );
  } catch (error) {
    next(error);
  }
};
