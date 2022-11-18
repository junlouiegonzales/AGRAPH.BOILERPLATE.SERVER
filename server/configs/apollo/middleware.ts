import { ServerRegistration } from 'apollo-server-express';
import { app } from './http-server';

export const middleware: ServerRegistration = {
  app,
  path: '/',
};

export default middleware;
