import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLUpload } from 'graphql-upload';

import {
  typeDefs,
  queryResolvers,
  commandResolvers,
  // subscriptionResolvers,
} from '../../features';

export default makeExecutableSchema({
  typeDefs,
  resolvers: {
    Upload: GraphQLUpload,
    Query: queryResolvers,
    Mutation: commandResolvers,
    // Subscription: subscriptionResolvers,
  },
});
