/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import httpServer from './http-server';
import schema from './schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

export const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/subscription',
});

export const serverCleanup = useServer(
  {
    schema,
    onConnect: async () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('Connected to websocket......');
      }
    },
    onDisconnect() {
      if (process.env.NODE_ENV === 'development') {
        console.log('Disconnected!');
      }
    },
  },
  wsServer
);

const ApolloServerPluginDrainWsServer = () => {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await serverCleanup.dispose();
        },
      };
    },
  };
};

export default ApolloServerPluginDrainWsServer;
