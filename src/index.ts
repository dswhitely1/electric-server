import server from './server';
import { logger } from './services';

const { PORT = 3000 } = process.env;

process.on('unhandledRejection', (err) => {
  if (process.env.NODE_ENV === 'development') {
    logger.warn({ message: 'unhandledRejection', extra: err });
  }
});

server.listen(PORT, () =>
  logger.info({
    message: `Server listening on PORT:${PORT}`,
  }),
);
