import { Context } from '.keystone/types';
import type { Prisma } from '.prisma/client';

declare global {
  interface globalThis {
    ___KEYSTONE___CONTEXT___: Context;
  }
}

class ContextProvider {
  // @ts-ignore
  private _context: Context;

  get prisma() {
    return this.context.prisma;
  }
  get db() {
    return this.context.db;
  }
  get query() {
    return this.context.query;
  }

  get sudo() {
    return this.context.sudo;
  }

  get transaction() {
    return this.context.transaction;
  }

  get withSession() {
    return this.context.withSession;
  }

  get graphql() {
    return this.context.graphql;
  }

  get lists() {
    return this.context.__internal.lists;
  }

  get context(): Context {
    return this._context || global.___KEYSTONE___CONTEXT___;
  }
  setContext(context: Context) {
    if (process.env.NODE_ENV !== 'production') {
      global.___KEYSTONE___CONTEXT___ = context;
      console.log('Setting global context', typeof context);
    }
    this._context = context;
  }
}

export const contextProvider = new ContextProvider();

export const ctx = contextProvider;
