export class Meteor {
  constructor(
    id,
    name,
    diameter,
    is_potentially_hazardous_asteroid,
    close_approach_date_full,
    relative_velocity,
  ) {
    this.id = id;
    this.name = name;
    this.diameter = diameter;
    this.is_potentially_hazardous_asteroid = is_potentially_hazardous_asteroid;
    this.close_approach_date_full = close_approach_date_full;
    this.relative_velocity = relative_velocity;
  }
}
