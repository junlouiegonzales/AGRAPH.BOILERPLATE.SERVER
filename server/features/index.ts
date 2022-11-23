import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

console.log(__dirname);

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
