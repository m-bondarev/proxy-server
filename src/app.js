import express from 'express';
import meteorRoutes from './routes/meteors.js';
import { errorHandler } from './errors/error.handler.js';

const app = express();

app.use('/meteors', meteorRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, (error) => {
  error ? console.log(error.message) : console.log(`Running on port ${process.env.PORT}`);
});
