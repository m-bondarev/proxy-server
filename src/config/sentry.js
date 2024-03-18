import Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import { environment } from './environment.js';

export const sentryConfig = (app) => {
  Sentry.init({
    dsn: environment.sentry.dsn,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Sentry.Integrations.Express({ app }),
      nodeProfilingIntegration(),
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
  });

  return Sentry;
};
