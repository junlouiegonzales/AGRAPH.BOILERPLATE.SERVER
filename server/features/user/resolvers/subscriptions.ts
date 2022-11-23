import { PubSub } from '../../../configs/pubsub';
import { withFilter } from 'graphql-subscriptions';

export const USER_CREATED = 'USER_CREATED';

export default {
  onUserCreated: {
    subscribe: withFilter(
      () => PubSub.asyncIterator(USER_CREATED),
      (payload, args): boolean => {
        return payload.onUserCreated?.userId === args.userId;
      }
    ),
  },
};
