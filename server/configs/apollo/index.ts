/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloServerExpressConfig } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
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
    ApolloServerPluginDrainWsServer(),
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault()
      : ApolloServerPluginLandingPageLocalDefault({ embed: false }),
  ],
};

export default config;
