import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select } from '@keystone-6/core/fields';

export const Referral = list({
  access: allowAll,
  fields: {
    referredBy: relationship({
      ref: 'User.referrals',
      many: false,
    }),
    referredUser: relationship({
      ref: 'User',
    }),
    status: select({
      options: [
        { label: 'Pending', value: 'PENDING' },
        { label: 'Confirmed', value: 'CONFIRMED' },
        { label: 'Rejected', value: 'REJECTED' },
      ],
      defaultValue: 'PENDING',
    }),
  },
});
