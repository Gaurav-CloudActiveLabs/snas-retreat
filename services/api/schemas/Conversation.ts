import { list } from '@/utils/lib';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

const ChatRoom = list({
  fields: {
    name: text(),
    messages: relationship({ ref: 'Message.conversation', many: true }), // Reference to messages in the chat room
    users: relationship({ ref: 'User.chatRooms', many: true }), // Reference to users in the chat room
  },
});
