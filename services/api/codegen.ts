import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: [
    'app/**/*.{ts,tsx}',
    'graphql/queries/**/*.{ts,tsx}',
    '!**/jobs/**/*.tsx',
    '!**/sku-inventory/**/*.tsx',
    '!**/services/core/admin/graphql/urql.ts',
  ],
  generates: {
    './graphql/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
