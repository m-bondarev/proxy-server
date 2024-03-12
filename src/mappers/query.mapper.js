export const mapQueryToMeteorRequest = ({ date, count, were_dangerous_meteors }) => ({
  date: date ? new Date(date) : null,
  count: count || false,
  wereDangerousMeteors: were_dangerous_meteors || false,
});
