import { list } from '@/utils/lib';
import { image, integer, json, text } from '@keystone-6/core/fields';

import { isAdmin } from '../accessControl';

// Modify the access control based on your needs

export const ContactUs = list({
  access: {
    operation: {
      query: () => true,
      create: isAdmin,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    // image: image({
    //   storage: 'my_image_storage', // Adjust this based on your storage configuration
    //   label: 'Contact Image',
    //   ui: {
    //     description:
    //       'An image representing the contact, such as a location image.',
    //   },
    // }),
    image: text(),
    phoneNumber: text({
      validation: {
        match: {
          regex: /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/,
          explanation: 'Phone number should be a valid international format',
        },
      },
      ui: {
        description: 'The contact phone number, including country code.',
      },
    }),
    email: text({
      isIndexed: 'unique',
      validation: {
        isRequired: true,
        match: {
          regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          explanation: 'Email should be a valid email address.',
        },
      },
      ui: {
        description: 'The contact email address.',
      },
    }),
    address: text({
      ui: {
        description: 'Full contact address (street, city, etc.).',
      },
    }),
    locationCoordinates: json({
      ui: {
        description: 'Location coordinates (latitude and longitude).',
      },
    }),
  },
  ui: {
    label: 'Contact Us',
    listView: {
      initialColumns: ['email', 'phoneNumber', 'address'],
    },
  },
});
