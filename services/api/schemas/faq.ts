import { text } from '@keystone-6/core/fields';
import { list } from './lib';

export const Faq = list({
  access: {
      operation: {
        create: () => true,
        query: () => true,
        update: () => true,
        delete:() => true,
      },
    },
fields: {
  question: text({
      validation: { isRequired: true },
    }),
    answer: text({
      validation: { isRequired: true },
    }),
},
});

