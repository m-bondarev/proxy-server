import { Meteor } from '../models/meteor.model.js';

const extractedMeteors = (asteroidsData) => {
  return Object.entries(asteroidsData.near_earth_objects)
    .sort()
    .map((value) => value.splice(1, 1))
    .flat(2)
    .map((asteroid) => {
      return new Meteor(
        asteroid.id,
        asteroid.name,
        {
          estimated_diameter_min: asteroid.estimated_diameter.meters.estimated_diameter_min,
          estimated_diameter_max: asteroid.estimated_diameter.meters.estimated_diameter_max,
        },
        asteroid.is_potentially_hazardous_asteroid,
        asteroid.close_approach_data[0].close_approach_date_full,
        asteroid.close_approach_data[0].relative_velocity.kilometers_per_second,
      );
    });
};

export const mapAsteroidsData = (query, asteroidsData) => {
  let json = {};
  const meteors = extractedMeteors(asteroidsData);

  if (query.count === 'true' && query.wereDangerousMeteors !== 'true') {
    json.meteors = meteors.length;
  } else if (query.count === 'true' && query.wereDangerousMeteors === 'true') {
    json.count = meteors.length;
    json.meteors = onlyDangerousMeteors(meteors);
  } else {
      json.meteors = query.wereDangerousMeteors ? onlyDangerousMeteors(meteors) : meteors;
  }

  return json;
};

const onlyDangerousMeteors = (meteors) => {
  return meteors.filter((meteor) => meteor.is_potentially_hazardous_asteroid);
};
