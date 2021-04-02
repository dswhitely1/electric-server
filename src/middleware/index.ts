import {
  handleBodyParsing,
  handleCompression,
  handleCors,
  handleHelmet,
  handleMorgan,
  handleRestricted,
} from './common';

export default [
  handleHelmet,
  handleBodyParsing,
  handleCors,
  handleCompression,
  handleMorgan,
  handleRestricted,
];
