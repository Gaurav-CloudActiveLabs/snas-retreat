import { text, relationship, image } from '@keystone-6/core/fields';

export const RoomImage = {
    access: {
        operation: {
          create: () => true,
          query: () => true,
          update: () => true,
          delete:() => true,
        },
      },
  fields: {
    image: image({
      storage: 'my_image_storage'
    }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
      label: 'Image Description',
    }),
    room: relationship({
      ref: 'Room.images',
      many: false, 
    }),
  },
};

