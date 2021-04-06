import winston from 'winston';

export const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.prettyPrint(),
    winston.format.json(),
    winston.format.timestamp({ format: 'MM-DD-YYYY hh:mm:ss:ms A' }),
    winston.format.printf((nfo) => {
      let message = `${nfo.timestamp} - ${nfo.level}: ${nfo.message}`;
      if (nfo.extra) {
        message += `, data: ${JSON.stringify(nfo.extra)}`;
      }
      return message;
    }),
  ),
  transports: [new winston.transports.Console()],
});
