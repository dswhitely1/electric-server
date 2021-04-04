import {
  handleBodyParsing,
  handleCompression,
  handleCors,
  handleHelmet,
  handleMorgan,
  handleRestricted,
} from './common';
export * from './isAdmin';

export default [
  handleHelmet,
  handleBodyParsing,
  handleCors,
  handleCompression,
  handleMorgan,
  handleRestricted,
];
