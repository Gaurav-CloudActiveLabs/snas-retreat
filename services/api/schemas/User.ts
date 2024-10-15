import { ctx } from '@/lib/ctx';
import { generateReferralCode } from '@/utils/helper';
import { list } from '@/utils/lib';
import {
  checkbox,
  json,
  password,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAuthorized, isFieldPublic } from '../accessControl';

export const User = list({
  access: {
    operation: {
      query: isAuthorized,
      create: ()=>true,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: () => true,
      update: ({ session }) => {
        return true;
        if (session?.data.isAdmin) {
          return true;
        }
        return {
          OR: [
            {
              id: {
                equals: session?.itemId,
              },
            },
          ],
        };
      },
      delete: ({ session }) => {
        if (session?.data.isAdmin) {
          return true;
        }
        return {
          OR: [
            {
              id: {
                equals: session?.itemId,
              },
            },
          ],
        };
      },
    },
  },
  hooks: {
    afterOperation: {
      async create({ item, context }) {
        const code = generateReferralCode(item.id.toString());
        await context.prisma.user.update({
          where: {
            id: item.id as string,
          },
          data: {
            referralCode: code,
          },
        });
      },
    },
  },
  fields: {
    firstName: text({
      validation: { isRequired: true, length: { min: 3, max: 15 } },
    }),
    lastName: text({
      validation: { length: { max: 15 } },
    }),
    isLastNamePublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    email: text({
      isIndexed: 'unique',
      validation: {
        isRequired: true,
        match: {
          regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          explanation: 'email should be a valid email',
        },
      },
    }),
    isEmailPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    followers: relationship({ ref: 'User.following', many: true }),
    following: relationship({ ref: 'User.followers', many: true }),

    password: password({
      validation: {
        isRequired: true,
        match: {
          regex:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          explanation:
            'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (e.g., @, $, !, %, *, ?, &).',
        },
      },
    }),
    enrollments: relationship({ ref: 'Enrollment.user', many: true }),
    comments: relationship({ ref: 'Comment.user', many: true }),
    pronoun: text(),
    isPronounPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    dob: timestamp(),
    isDobPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    contactInfo: json(),
    isContactPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    interests: json(),
    isInterestsPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    employmentStatus: text(),
    isEmploymentStatusPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    socialFields: json(),
    theme: select({
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
      defaultValue: 'light',
    }),
    pushNotificationSettings: relationship({
      ref: 'PushNotificationSetting.user',
      ui: {
        displayMode: 'cards',
        cardFields: [
          'enablePushNotifications',
          'liveStreams',
          'newMessages',
          'messageRequests',
          'commentsOnPosts',
          'commentsFromPeople',
          'mentions',
        ],
        inlineEdit: { fields: ['enablePushNotifications'] },
        linkToItem: true,
      },
    }),
    referralCode: text({
      isIndexed: true,
      access: {
        update: () => false,
        read: () => {
          return true;
        },
      },
    }),
    referrals: relationship({
      ref: 'Referral.referredBy',
      many: true,
    }),
    messagesSent: relationship({ ref: 'Message.sender', many: true }),
    chatMembers: relationship({ ref: 'ChatMember.user', many: true }),
    isAdmin: checkbox({
      defaultValue: false,
      access: {
        update: () => false,
        read: () => {
          return false;
        },
      },
      // hooks: {
      //   resolveInput: {
      //     create: async ({ resolvedData }) => {
      //       resolvedData.isAdmin = false;
      //       return resolvedData.isAdmin;
      //     },
      //     update: async ({ resolvedData }) => {
      //       resolvedData.isAdmin = false;
      //       return resolvedData.isAdmin;
      //     },
      //   },
      // },
    }),
    verified: checkbox({
      defaultValue: false,
      access: {
        update: () => false,
        read: () => {
          return false;
        },
      },
      // hooks: {
      //   resolveInput: {
      //     create: async ({ resolvedData }) => {
      //       resolvedData.verified = false;
      //       return resolvedData.verified;
      //     },
      //     update: async ({ resolvedData }) => {
      //       resolvedData.verified = false;
      //       return resolvedData.verified;
      //     },
      //   },
      // },
    }),
    shadowBanned: checkbox(),
    groups: relationship({ ref: 'GroupMember.user', many: true }),
    groupManaged: relationship({ ref: 'Group.admins', many: true }),
    joinRequests: relationship({ ref: 'JoinRequest.user', many: true }),
    posts: relationship({ ref: 'Post.author', many: true }),
    community: relationship({ ref: 'Community.members' }),
    isProfileCompleted: checkbox({ defaultValue: false }),
    likes: relationship({ ref: 'Like.user', many: true }),
    notifications: relationship({ ref: 'Notification.user', many: true }),
    userType: select({
      options: [
        { label: 'Current Foster', value: 'current_foster' },
        { label: 'Former Foster', value: 'former_foster' },
        { label: 'Work with Foster', value: 'work_with_foster' },
        { label: 'SFLA Team', value: 'sfla_team' },
        { label: 'None of the Above', value: 'none' },
        { label: 'admin', value: 'admin' },
      ],
    }),
    ageRange: text(),
    phone: text(),
    heardAboutApp: text(),
    housingSupport: select({
      options: [
        { label: 'Yes, I am in need of housing ASAP', value: 'immediate' },
        {
          label: 'Yes, I will be needing housing within the next months',
          value: 'upcoming',
        },
        { label: 'No, I have stable housing', value: 'stable' },
      ],
    }),
    isHousingSupportPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    foodClothingSupport: select({
      options: [
        { label: 'Food', value: 'food' },
        { label: 'Cloth', value: 'cloth' },
        { label: 'Both- Food and Clothing', value: 'both' },
        { label: 'Neither', value: 'neither' },
      ],
    }),
    educationStatus: select({
      options: [
        { label: 'Not in School', value: 'not_in_school' },
        { label: 'In High School', value: 'in_high_school' },
        {
          label: 'Interested in Applying to College',
          value: 'interested_in_college',
        },
        { label: 'In College', value: 'in_college' },
        { label: 'Graduated', value: 'graduated' },
      ],
    }),
    isEducationStatusPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    collegeUniversity: text(),
    isCollegeUniversityPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    companyName: text(),
    isCompanyNamePublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    zipCode: text(),
    isZipCodePublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    favoriteColor: text(),
    isFavoriteColorPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    aboutYourself: text(),
    isAboutYourselfPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    refererDetails: relationship({ ref: 'User', many: false }),
    isRefererPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
    assistance: select({
      options: [
        { label: 'Food', value: 'food' },
        { label: 'Cloth', value: 'cloth' },
        { label: 'Housing', value: 'housing' },
        { label: 'Parenting', value: 'parenting' },
        { label: 'None of the Above', value: 'none' },
        { label: 'All of the Above', value: 'all' },
      ],
    }),
    birthMonth: select({
      options: [
        { label: 'January', value: 'january' },
        { label: 'February', value: 'february' },
        { label: 'March', value: 'march' },
        { label: 'April', value: 'april' },
        { label: 'May', value: 'may' },
        { label: 'June', value: 'june' },
        { label: 'July', value: 'july' },
        { label: 'August', value: 'august' },
        { label: 'September', value: 'september' },
        { label: 'October', value: 'october' },
        { label: 'November', value: 'november' },
        { label: 'December', value: 'december' },
      ],
    }),
    isBirthMonthPublic: checkbox({
      defaultValue: false,
      access: {
        create: isFieldPublic,
        update: isFieldPublic,
      },
    }),
  },
  ui: {
    labelField: 'email',
  },
});
