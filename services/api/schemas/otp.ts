import { relationship, text } from '@keystone-6/core/fields';
import { list } from './lib';

export const Otp =list( {
    access: {
        operation: {
          create: () => true,
          query: () => true,
          update: () => true,
          delete:() => true,
        },
      },
  fields: {
    otp: text({ validation: { isRequired: true } }),
    user: relationship({ ref: 'User.otps', many: false }),
  },
})

