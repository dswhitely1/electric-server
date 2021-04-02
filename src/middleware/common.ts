import { urlencoded, json, Router } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

export const handleHelmet = (router: Router) => router.use(helmet());

export const handleBodyParsing = (router: Router) => {
  router.use(urlencoded({ extended: true }));
  router.use(json());
};

export const handleCors = (router: Router) => router.use(cors());

export const handleCompression = (router: Router) => router.use(compression());

export const handleMorgan = (router: Router) => router.use(morgan('dev'));
