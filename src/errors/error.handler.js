export const errorHandler = (error, request, response) => {
  const status = error.status ?? 500;
  const message = error.message ?? 'Error fetching data from NASA API';

  response.status(status).json({ message: `${message}` });
};
