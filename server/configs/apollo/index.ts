/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloServerExpressConfig } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import httpServer from './http-server';
import schema from './schema';
// import { userProfile } from 'features/account/resolvers/queries';
import ApolloServerPluginDrainWsServer from './ws-server';

const config: ApolloServerExpressConfig = {
  schema,
  introspection: true,
  csrfPrevention: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: async ({ req }: any) => {
    // const token = req.headers.authorization || '';
    // const currentUser = await userProfile(token);
    // return { currentUser };
  },
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ApolloServerPluginDrainWsServer(),
  ],
};

export default config;
