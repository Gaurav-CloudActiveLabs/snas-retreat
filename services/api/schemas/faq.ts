import { text } from '@keystone-6/core/fields';

export const Faq = {
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
};

