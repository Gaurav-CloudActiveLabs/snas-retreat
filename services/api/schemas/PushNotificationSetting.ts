import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  checkbox,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';

export const PushNotificationSetting = list({
  access: allowAll,
  fields: {
    enablePushNotifications: checkbox({
      defaultValue: true,
      label: 'Enable Push Notifications',
    }),
    liveStreams: checkbox({ defaultValue: true, label: 'Live Streams' }),
    newMessages: checkbox({ defaultValue: true, label: 'New Messages' }),
    messageRequests: checkbox({
      defaultValue: true,
      label: 'Message Requests',
    }),
    commentsOnPosts: checkbox({
      defaultValue: true,
      label: 'Comments on Your Posts',
    }),
    commentsFromPeople: checkbox({
      defaultValue: true,
      label: 'Comments from People',
    }),
    mentions: checkbox({ defaultValue: true, label: 'Mentions' }),
    user: relationship({ ref: 'User.pushNotificationSettings' }),
  },
});
