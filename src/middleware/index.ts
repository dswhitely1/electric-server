import {
  handleBodyParsing,
  handleCompression,
  handleCors,
  handleHelmet,
  handleMorgan,
} from './common';

export default [
  handleHelmet,
  handleBodyParsing,
  handleCors,
  handleCompression,
  handleMorgan,
];
