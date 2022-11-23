import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Cluster } from 'ioredis';

const cluster = new Cluster(
  [
    {
      host: process.env.REDIS_CLUSTER_HOST,
      port: parseInt(process.env.REDIS_CLUSTER_PORT),
    },
  ],
  {
    slotsRefreshTimeout: 3000,
    dnsLookup: (address, callback): void => callback(null, address),
  }
);

export const PubSub = new RedisPubSub({
  publisher: cluster,
  subscriber: cluster,
});
