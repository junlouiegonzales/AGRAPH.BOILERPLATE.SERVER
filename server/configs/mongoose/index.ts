import { ConnectOptions } from 'mongoose';

const config: ConnectOptions = {
  keepAlive: true,
  socketTimeoutMS: 0,
  autoIndex: true,
};

export default config;
