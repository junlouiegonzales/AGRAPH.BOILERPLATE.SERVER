import { MutationAddUserArgs } from '../../../common/types/graphql';
import collections from '../../../collections';

export default {
  addUser: async (
    parent: unknown,
    request: MutationAddUserArgs
  ): Promise<void> => {
    const { firstName, lastName } = request;
    const user = new collections.users({ firstName, lastName });
    await user.save();
  },
};
