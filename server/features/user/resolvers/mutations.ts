import { MutationAddUserArgs } from '../../../common/types/graphql';
import collections from '../../../collections';
import { PubSub } from '../../../configs/pubsub';
import { USER_CREATED } from './subscriptions';

export default {
  addUser: async (
    parent: unknown,
    request: MutationAddUserArgs
  ): Promise<void> => {
    const { firstName, lastName } = request;
    const user = new collections.users({ firstName, lastName });
    await user.save();

    PubSub.publish(USER_CREATED, {
      onChatCreated: {
        userId: user._id,
        ...user,
      },
    });
  },
};
