import { Meteor } from "../models/meteor.model.js";

export const mapAsteroidsData = (asteroidsData) => ({
  meteors: Object
    .entries(asteroidsData.near_earth_objects)
    .sort()
    .map(([date, asteroids]) => ({
      [date]: asteroids.map((asteroid) => {
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
      }),
    })),
});
