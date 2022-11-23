import { QueryGetUserByParamArgs } from '../../../common/types/graphql';
import collections from '../../../collections';

export default {
  getUserByParam: async (
    parent: unknown,
    request: QueryGetUserByParamArgs
  ): Promise<void> => {
    const { userId } = request;
    return await collections.users.findById(userId);
  },
};
