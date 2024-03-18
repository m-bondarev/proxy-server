import express from 'express';
import meteorRouter from './routes/meteors.js';
import userRouter from './routes/user.js';
import { defaultErrorHandler } from './errors/error.handler.js';
import { environment } from './config/environment.js';
import { queryValidator } from './middlewares/query.validator.js';
import { sentryConfig } from './config/sentry.js';

const app = express();
const sentryHandlers = sentryConfig(app).Handlers;

app.use(sentryHandlers.requestHandler());
app.use(sentryHandlers.tracingHandler());

app.use(express.json());

app.use(queryValidator);

app.use('/meteors', meteorRouter);
app.use('/user', userRouter);

app.use(sentryHandlers.errorHandler());
app.use(defaultErrorHandler);

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

app.listen(environment.server.port, (error) => {
  error ? console.log(error.message) : console.log(`Running on port ${environment.server.port}`);
});
