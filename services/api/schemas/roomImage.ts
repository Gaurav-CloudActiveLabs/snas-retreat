import { text, relationship, image } from '@keystone-6/core/fields';
import { list } from './lib';

export const RoomImage = list({
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
    storage: 'my_local_images'
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
});
