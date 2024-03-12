export const defaultErrorHandler = (error, request, response) => {
  const status = error.status ?? 500;
  const message = error.message ?? 'Error fetching data from NASA API';

  response.status(status).json({ message: `${message}` });
};

export const handleError = (res, status, message) => {
  res.status(status).json({ message: `${message}` }); // Or render a custom 404 template
};
