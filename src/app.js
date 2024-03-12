import express from 'express';
import meteorRoutes from './routes/meteors.js';
import { defaultErrorHandler, handleError } from './errors/error.handler.js';

const app = express();

app.use('/meteors', meteorRoutes);

app.get('*', (req, res) => {
  handleError(res, 404, 'Page not found');
});

app.use(defaultErrorHandler);

app.listen(process.env.PORT, (error) => {
  error ? console.log(error.message) : console.log(`Running on port ${process.env.PORT}`);
});
