import { config } from '@keystone-6/core';
import dotenv from 'dotenv';

import { fixPrismaPath } from './.prisma';
import { session, withAuth } from './auth';
import { contextProvider } from './lib/ctx';
import { extendGraphqlSchema } from './mutations';
import { lists } from './schemas';
import { extendHttpServer } from './websocket';

dotenv.config();

export default withAuth(
  config({
    ui: {
      basePath: '/admin',
    },
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL,
      async onConnect(context) {
        contextProvider.setContext(context);
      },
      ...fixPrismaPath,
    },
    server: {
      port: process.env.PORT || 4200,
      cors: { origin: '*', credentials: true },
      extendHttpServer,
    },
    graphql: {
      extendGraphqlSchema,
    },
    lists,
    session,
  }),
);
