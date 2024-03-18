export const mapQueryToMeteorRequest = ({ date, count, were_dangerous_meteors }) => ({
  date: date ? new Date(date) : null,
  count: count,
  wereDangerousMeteors: were_dangerous_meteors,
});
