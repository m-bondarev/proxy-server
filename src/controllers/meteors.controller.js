import { getMeteorsData } from '../services/meteors.service.js';
import { mapQueryToMeteorRequest } from '../mappers/query.mapper.js';

export const getMeteors = async (req, res, next) => {
  try {
    const request = mapQueryToMeteorRequest(req.query);
    const data = await getMeteorsData(request, next);

    res.json(data);
  } catch (error) {
    next(error);
  }
};
