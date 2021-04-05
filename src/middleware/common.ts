import { urlencoded, json, Router } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan, { StreamOptions } from 'morgan';
import { restricted } from './restricted';
import { logger } from '../services/logger';

export const handleHelmet = (router: Router) => router.use(helmet());

export const handleBodyParsing = (router: Router) => {
  router.use(urlencoded({ extended: true }));
  router.use(json());
};

export const handleCors = (router: Router) => router.use(cors());

export const handleCompression = (router: Router) => router.use(compression());

// Morgan Options
const stream: StreamOptions = {
  write: (message) => {
    const fixedMessage = message.replace(/\n/g, '');
    logger.info(fixedMessage);
  },
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

export const handleMorgan = (router: Router) =>
  router.use(
    morgan('dev', {
      stream,
      skip,
    }),
  );

export const handleRestricted = (router: Router) =>
  router.use(
    restricted().unless({
      path: [
        {
          url: '/auth/login',
          methods: ['GET'],
        },
        {
          url: '/auth/register',
          methods: ['POST'],
        },
        {
          url: '/_health',
          methods: ['GET'],
        },
        {
          url: '/messages',
          methods: ['POST'],
        },
      ],
    }),
  );
