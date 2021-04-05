import server from './server';
import { logger } from './services';

const { PORT = 3000 } = process.env;

process.on('uncaughtException', (e) => {
  logger.error({
    message: 'uncaughtException',
    extra: e,
  });
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  logger.error({
    message: 'unhandledRejection',
    extra: e,
  });
  process.exit(1);
});

server.listen(PORT, () =>
  logger.info({
    message: `Server listening on PORT:${PORT}`,
  }),
);
