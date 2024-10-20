import { float, relationship, text } from '@keystone-6/core/fields';
import { list } from './lib';

export const Invoice = list({
    access: {
        operation: {
          create: () => true,
          query: () => true,
          update: () => true,
          delete:() => true,
        },
      },
  fields: {
    booking: relationship({
        ref: 'Booking.invoice',
      }),
      invoiceNumber: text({ isIndexed: "unique" }),
      amount: float({
        validation: { isRequired: true },
        label: 'Total Amount (including taxes)',
      }),
      taxDetails: text({
        ui: {
          displayMode: "textarea",
        },
        label: 'Tax Details (e.g., GST)',
      }),
  },
});

