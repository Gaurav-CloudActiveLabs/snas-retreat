import { json, select, text } from '@keystone-6/core/fields';

export const ReportList = {
    ui: {
        label: 'Report',
        isHidden: false,
      },
    access: {
        operation: {
          create: () => true,
          query: () => true,
          update: () => true,
          delete:() => true,
        },
      },
  fields: {
    type: select({
        options: [
          { label: 'BOOKING', value: 'BOOKING' },
          { label: 'REVENUE', value: 'REVENUE' },
          { label: 'CANCELLATION', value: 'CANCELLATION' },
        ],
      }),
      data: json(),
  },
};

