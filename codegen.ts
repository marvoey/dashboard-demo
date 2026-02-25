import type { CodegenConfig } from '@graphql-codegen/cli'
import {loadEnv} from 'vite';

const {OPTIMIZELY_GRAPH_GATEWAY, OPTIMIZELY_GRAPH_SINGLE_KEY} = loadEnv('', process.cwd(), '');
 
const config: CodegenConfig = {
  schema: OPTIMIZELY_GRAPH_GATEWAY + '/content/v2?auth=' + OPTIMIZELY_GRAPH_SINGLE_KEY,
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    '__generated/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
        useTypeImports: true
      }
    },
    '__generated/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
        useTypeImports: true,
      }
    },
    "__generated/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
}
 
export default config