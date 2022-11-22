import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

export const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join('', './**/graphql/index.*'), {
    extensions: ['ts', 'js'],
  })
);

export const queryResolvers = mergeResolvers(
  loadFilesSync(path.join('', './**/resolvers/queries.*'), {
    extensions: ['ts', 'js'],
  })
);

export const commandResolvers = mergeResolvers(
  loadFilesSync(path.join('', './**/resolvers/mutations.*'), {
    extensions: ['ts', 'js'],
  })
);
