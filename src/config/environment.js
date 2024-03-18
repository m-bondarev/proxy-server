import dotenv from 'dotenv';

dotenv.config();

const { METEORS_API_URL, API_KEY, ROVER_API_URL, PORT, SENTRY_DSN } = process.env;

export const environment = {
  nasa: {
    meteorsApiUrl: METEORS_API_URL,
    roverApiUrl: ROVER_API_URL,
    apiKey: API_KEY,
  },
  server: {
    port: PORT || 4000,
  },
  sentry: {
    dsn: SENTRY_DSN,
  },
};
