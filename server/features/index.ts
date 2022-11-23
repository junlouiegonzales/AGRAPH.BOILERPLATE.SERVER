import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

export const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, './**/graphql/index.*'), {
    extensions: ['ts', 'js'],
  })
);

export const queryResolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, './**/resolvers/queries.*'), {
    extensions: ['ts', 'js'],
  })
);

export const commandResolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, './**/resolvers/mutations.*'), {
    extensions: ['ts', 'js'],
  })
);

export const subscriptionResolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, './**/resolvers/subscriptions.*'), {
    extensions: ['ts', 'js'],
  })
);
