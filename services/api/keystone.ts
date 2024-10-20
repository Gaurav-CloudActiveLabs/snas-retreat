// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from "@keystone-6/core";

// to keep this file tidy, we define our schema in a different file
import { lists } from "./schemas/index";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";
import dotEnv from "dotenv";
import { contextProvider } from "./lib/ctx";
import { extendGraphqlSchema } from "./mutations";
// import { extendGraphqlSchema } from "./customSchema";
dotEnv.config();

export default withAuth(
  config({
    ui: {
      basePath: '/admin',
    },
    server:{
      port: Number(process.env.PORT) || 3001,
      cors: { origin: '*', credentials: true },
    },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "postgresql",
      url: `${process.env.DATABASE_URL}`,
      prismaClientPath:`node_modules/.prisma/client`,
      async onConnect(context) {
        contextProvider.setContext(context);
      },
    },

    lists,
    storage: {
      my_local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `http://localhost:3001/images${path}`,
        serverRoute: {
          path: "/images",
        },
        storagePath: "public/images",
      },
      my_local_file: {
        kind: "local",
        type: "file",
        generateUrl: (path) => `http://localhost:3001/file${path}`,
        serverRoute: {
          path: "/file",
        },
        storagePath: "public/file",
      },
    },
    session,
    graphql: {
      extendGraphqlSchema,
    }
  })
);
