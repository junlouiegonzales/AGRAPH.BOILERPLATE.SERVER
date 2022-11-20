import { CorsOptions } from 'cors';

const allowedOrigins: string = process.env.ALLOWED_ORIGINS;

const corsOpts: CorsOptions = {
  credentials: true,
  origin: (origin, callback): void => {
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (!allowedOrigins)
      return callback(new Error('Origins configurations not found.'), false);

    if (allowedOrigins.indexOf(origin) === -1)
      return callback(
        new Error(
          `The CORS policy for this site does not ${origin} allow access from the specified Origin.`
        ),
        false
      );

    return callback(null, true);
  },
};

export default corsOpts;
