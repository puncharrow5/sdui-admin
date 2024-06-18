import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: ["http://10.10.100.57:3000/graphql"],
  documents: [
    "./src/graphql/fragments/**/*.ts",
    "./srcgraphql/query/**/*.ts",
    "./src/graphql/mutation/**/*.ts",
    "./src/graphql/subscription/**/*.ts",
    "./src/**/*/gql.ts",
    "./src/**/*/*.gql.ts",
    "!./src/**/*.graphql.ts",
  ],
  generates: {
    "./src/graphql/generated/types.ts": {
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
      config: {
        skipTypename: true,
      },
      plugins: [
        "typescript",
        "typescript-operations",
        {
          "typescript-react-apollo": {
            withHOC: false,
            withComponent: false,
            withHooks: true,
          },
        },
      ],
    },
  },
};

export default config;
