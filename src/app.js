import express from 'express';
import meteorRoutes from './routes/meteors.js';
import { defaultErrorHandler, handleError } from './errors/error.handler.js';

const app = express();

app.use('/meteors', meteorRoutes);

app.use(defaultErrorHandler);

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

app.listen(process.env.PORT, (error) => {
  error ? console.log(error.message) : console.log(`Running on port ${process.env.PORT}`);
});
