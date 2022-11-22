import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'server/features/',
  generates: {
    'server/common/types/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
      },
    },
    // './graphql.schema.json': {
    //   plugins: ['introspection'],
    // },
  },
};

export default config;
