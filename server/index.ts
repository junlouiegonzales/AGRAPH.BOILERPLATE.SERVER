import { ApolloServer } from 'apollo-server-express';
import apolloServerConfig from 'configs/apollo';
import mongodbConfig from 'configs/mongoose';
import httpServer from 'configs/apollo/http-server';
import middleware from 'configs/apollo/middleware';
import mongoose from 'mongoose';
// import seedCollections from 'configs/seeders';
import wsServer from 'configs/apollo/ws-server';

(async (): Promise<void> => {
  var x = '';
  /**
   * Database configuration
   */
  await mongoose.connect(process.env.MONGO_URL, mongodbConfig);
  mongoose.set('debug', false);
  mongoose.connection.on('error', () => {
    throw new Error('unable to connect to database');
  });

  // /**
  //  * Seed Mongo Collections
  //  */
  // await seedCollections();

  /**
   * App Server Configuration
   */
  const server = new ApolloServer(apolloServerConfig);
  await server.start();

  server.applyMiddleware(middleware);

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: process.env.SERVER_PORT }, resolve);
    wsServer;
  });

  console.log('*************************************************************');
  console.log(
    `🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Server listing to ws://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`
  );
  console.log(`⚡️ Environment: ${process.env.NODE_ENV}`);
  console.log(`🌱 MongoDb URL: ${process.env.MONGO_URL}`);
  console.log(
    `🔥 Redis Cluster: ${process.env.REDIS_CLUSTER_HOST}:${process.env.REDIS_CLUSTER_PORT}`
  );
  console.log('*************************************************************');
})();
