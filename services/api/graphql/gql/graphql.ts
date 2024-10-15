/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AnnouncementCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  notificationSent?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AnnouncementOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  expiryDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  notificationSent?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type AnnouncementUpdateArgs = {
  data: AnnouncementUpdateInput;
  where: AnnouncementWhereUniqueInput;
};

export type AnnouncementUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  notificationSent?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AnnouncementWhereInput = {
  AND?: InputMaybe<Array<AnnouncementWhereInput>>;
  NOT?: InputMaybe<Array<AnnouncementWhereInput>>;
  OR?: InputMaybe<Array<AnnouncementWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  notificationSent?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type AnnouncementWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupRelateToManyForCreateInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subCategory?: InputMaybe<SubCategoryRelateToManyForCreateInput>;
  videoResources?: InputMaybe<VideoResourceRelateToManyForCreateInput>;
};

export type CategoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
};

export type CategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryUpdateArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupRelateToManyForUpdateInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subCategory?: InputMaybe<SubCategoryRelateToManyForUpdateInput>;
  videoResources?: InputMaybe<VideoResourceRelateToManyForUpdateInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  groups?: InputMaybe<GroupManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  subCategory?: InputMaybe<SubCategoryManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoResources?: InputMaybe<VideoResourceManyRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ChatCreateInput = {
  chatType?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ChatMemberRelateToManyForCreateInput>;
  messages?: InputMaybe<MessageRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ChatMemberCreateInput = {
  chat?: InputMaybe<ChatRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ChatMemberManyRelationFilter = {
  every?: InputMaybe<ChatMemberWhereInput>;
  none?: InputMaybe<ChatMemberWhereInput>;
  some?: InputMaybe<ChatMemberWhereInput>;
};

export type ChatMemberOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ChatMemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ChatMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatMemberCreateInput>>;
};

export type ChatMemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ChatMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatMemberCreateInput>>;
  disconnect?: InputMaybe<Array<ChatMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatMemberWhereUniqueInput>>;
};

export type ChatMemberUpdateArgs = {
  data: ChatMemberUpdateInput;
  where: ChatMemberWhereUniqueInput;
};

export type ChatMemberUpdateInput = {
  chat?: InputMaybe<ChatRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ChatMemberWhereInput = {
  AND?: InputMaybe<Array<ChatMemberWhereInput>>;
  NOT?: InputMaybe<Array<ChatMemberWhereInput>>;
  OR?: InputMaybe<Array<ChatMemberWhereInput>>;
  chat?: InputMaybe<ChatWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type ChatMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ChatOrderByInput = {
  chatType?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ChatRelateToOneForCreateInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  create?: InputMaybe<ChatCreateInput>;
};

export type ChatRelateToOneForUpdateInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  create?: InputMaybe<ChatCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatUpdateArgs = {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateInput = {
  chatType?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<ChatMemberRelateToManyForUpdateInput>;
  messages?: InputMaybe<MessageRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  chatType?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<ChatMemberManyRelationFilter>;
  messages?: InputMaybe<MessageManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ChatWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CommentCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  isEdited?: InputMaybe<Scalars['Boolean']['input']>;
  isFlagged?: InputMaybe<Scalars['Boolean']['input']>;
  isReported?: InputMaybe<Scalars['Boolean']['input']>;
  parentComment?: InputMaybe<CommentRelateToOneForCreateInput>;
  post?: InputMaybe<PostRelateToOneForCreateInput>;
  replies?: InputMaybe<CommentRelateToManyForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CommentManyRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isEdited?: InputMaybe<OrderDirection>;
  isFlagged?: InputMaybe<OrderDirection>;
  isReported?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CommentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
};

export type CommentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentRelateToOneForCreateInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  create?: InputMaybe<CommentCreateInput>;
};

export type CommentRelateToOneForUpdateInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  create?: InputMaybe<CommentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentUpdateArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  isEdited?: InputMaybe<Scalars['Boolean']['input']>;
  isFlagged?: InputMaybe<Scalars['Boolean']['input']>;
  isReported?: InputMaybe<Scalars['Boolean']['input']>;
  parentComment?: InputMaybe<CommentRelateToOneForUpdateInput>;
  post?: InputMaybe<PostRelateToOneForUpdateInput>;
  replies?: InputMaybe<CommentRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  isEdited?: InputMaybe<BooleanFilter>;
  isFlagged?: InputMaybe<BooleanFilter>;
  isReported?: InputMaybe<BooleanFilter>;
  parentComment?: InputMaybe<CommentWhereInput>;
  post?: InputMaybe<PostWhereInput>;
  replies?: InputMaybe<CommentManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CommunityCreateInput = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  members?: InputMaybe<UserRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

export type CommunityOrderByInput = {
  bannerImage?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  visibility?: InputMaybe<OrderDirection>;
};

export type CommunityRelateToOneForCreateInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  create?: InputMaybe<CommunityCreateInput>;
};

export type CommunityRelateToOneForUpdateInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  create?: InputMaybe<CommunityCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommunityUpdateArgs = {
  data: CommunityUpdateInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateInput = {
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  members?: InputMaybe<UserRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

export type CommunityWhereInput = {
  AND?: InputMaybe<Array<CommunityWhereInput>>;
  NOT?: InputMaybe<Array<CommunityWhereInput>>;
  OR?: InputMaybe<Array<CommunityWhereInput>>;
  bannerImage?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<UserManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  status?: InputMaybe<StringNullableFilter>;
  visibility?: InputMaybe<StringNullableFilter>;
};

export type CommunityWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ContactUsCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  locationCoordinates?: InputMaybe<Scalars['JSON']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUsOrderByInput = {
  address?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  phoneNumber?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ContactUsUpdateArgs = {
  data: ContactUsUpdateInput;
  where: ContactUsWhereUniqueInput;
};

export type ContactUsUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  locationCoordinates?: InputMaybe<Scalars['JSON']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUsWhereInput = {
  AND?: InputMaybe<Array<ContactUsWhereInput>>;
  NOT?: InputMaybe<Array<ContactUsWhereInput>>;
  OR?: InputMaybe<Array<ContactUsWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ContactUsWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CourseCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  enrollments?: InputMaybe<EnrollmentRelateToManyForCreateInput>;
  learningSets?: InputMaybe<LearningSetRelateToManyForCreateInput>;
  lessons?: InputMaybe<LessonRelateToManyForCreateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoResources?: InputMaybe<VideoResourceRelateToManyForCreateInput>;
};

export type CourseManyRelationFilter = {
  every?: InputMaybe<CourseWhereInput>;
  none?: InputMaybe<CourseWhereInput>;
  some?: InputMaybe<CourseWhereInput>;
};

export type CourseOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CourseRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  create?: InputMaybe<Array<CourseCreateInput>>;
};

export type CourseRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  create?: InputMaybe<Array<CourseCreateInput>>;
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
};

export type CourseRelateToOneForCreateInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  create?: InputMaybe<CourseCreateInput>;
};

export type CourseRelateToOneForUpdateInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  create?: InputMaybe<CourseCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseUpdateArgs = {
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  enrollments?: InputMaybe<EnrollmentRelateToManyForUpdateInput>;
  learningSets?: InputMaybe<LearningSetRelateToManyForUpdateInput>;
  lessons?: InputMaybe<LessonRelateToManyForUpdateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoResources?: InputMaybe<VideoResourceRelateToManyForUpdateInput>;
};

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  enrollments?: InputMaybe<EnrollmentManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  learningSets?: InputMaybe<LearningSetManyRelationFilter>;
  lessons?: InputMaybe<LessonManyRelationFilter>;
  status?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoResources?: InputMaybe<VideoResourceManyRelationFilter>;
};

export type CourseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnrollmentCreateInput = {
  course?: InputMaybe<CourseRelateToOneForCreateInput>;
  enrollmentDate?: InputMaybe<Scalars['DateTime']['input']>;
  lessonProgress?: InputMaybe<LessonProgressRelateToManyForCreateInput>;
  progress?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type EnrollmentManyRelationFilter = {
  every?: InputMaybe<EnrollmentWhereInput>;
  none?: InputMaybe<EnrollmentWhereInput>;
  some?: InputMaybe<EnrollmentWhereInput>;
};

export type EnrollmentOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  enrollmentDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  progress?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EnrollmentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EnrollmentWhereUniqueInput>>;
  create?: InputMaybe<Array<EnrollmentCreateInput>>;
};

export type EnrollmentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EnrollmentWhereUniqueInput>>;
  create?: InputMaybe<Array<EnrollmentCreateInput>>;
  disconnect?: InputMaybe<Array<EnrollmentWhereUniqueInput>>;
  set?: InputMaybe<Array<EnrollmentWhereUniqueInput>>;
};

export type EnrollmentRelateToOneForCreateInput = {
  connect?: InputMaybe<EnrollmentWhereUniqueInput>;
  create?: InputMaybe<EnrollmentCreateInput>;
};

export type EnrollmentRelateToOneForUpdateInput = {
  connect?: InputMaybe<EnrollmentWhereUniqueInput>;
  create?: InputMaybe<EnrollmentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnrollmentUpdateArgs = {
  data: EnrollmentUpdateInput;
  where: EnrollmentWhereUniqueInput;
};

export type EnrollmentUpdateInput = {
  course?: InputMaybe<CourseRelateToOneForUpdateInput>;
  enrollmentDate?: InputMaybe<Scalars['DateTime']['input']>;
  lessonProgress?: InputMaybe<LessonProgressRelateToManyForUpdateInput>;
  progress?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type EnrollmentWhereInput = {
  AND?: InputMaybe<Array<EnrollmentWhereInput>>;
  NOT?: InputMaybe<Array<EnrollmentWhereInput>>;
  OR?: InputMaybe<Array<EnrollmentWhereInput>>;
  course?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  enrollmentDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  lessonProgress?: InputMaybe<LessonProgressManyRelationFilter>;
  progress?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type EnrollmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventCreateInput = {
  acceptedUsers?: InputMaybe<UserRelateToManyForCreateInput>;
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  community?: InputMaybe<CommunityRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventDate?: InputMaybe<Scalars['DateTime']['input']>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  isOnline?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type EventManyRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  bannerImage?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  eventDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isOnline?: InputMaybe<OrderDirection>;
  location?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  acceptedUsers?: InputMaybe<UserRelateToManyForUpdateInput>;
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  community?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventDate?: InputMaybe<Scalars['DateTime']['input']>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  isOnline?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  acceptedUsers?: InputMaybe<UserManyRelationFilter>;
  bannerImage?: InputMaybe<StringFilter>;
  community?: InputMaybe<CommunityWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  eventDate?: InputMaybe<DateTimeNullableFilter>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  isOnline?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupCreateInput = {
  admins?: InputMaybe<UserRelateToManyForCreateInput>;
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<CategoryRelateToOneForCreateInput>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  isFeatured?: InputMaybe<Scalars['String']['input']>;
  joinRequests?: InputMaybe<JoinRequestRelateToManyForCreateInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

export type GroupManyRelationFilter = {
  every?: InputMaybe<GroupWhereInput>;
  none?: InputMaybe<GroupWhereInput>;
  some?: InputMaybe<GroupWhereInput>;
};

export type GroupMemberCreateInput = {
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  joinedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type GroupMemberManyRelationFilter = {
  every?: InputMaybe<GroupMemberWhereInput>;
  none?: InputMaybe<GroupMemberWhereInput>;
  some?: InputMaybe<GroupMemberWhereInput>;
};

export type GroupMemberOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  joinedAt?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type GroupMemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberCreateInput>>;
};

export type GroupMemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberCreateInput>>;
  disconnect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
};

export type GroupMemberUpdateArgs = {
  data: GroupMemberUpdateInput;
  where: GroupMemberWhereUniqueInput;
};

export type GroupMemberUpdateInput = {
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  joinedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type GroupMemberWhereInput = {
  AND?: InputMaybe<Array<GroupMemberWhereInput>>;
  NOT?: InputMaybe<Array<GroupMemberWhereInput>>;
  OR?: InputMaybe<Array<GroupMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type GroupMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupOrderByInput = {
  bannerImage?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isFeatured?: InputMaybe<OrderDirection>;
  location?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  visibility?: InputMaybe<OrderDirection>;
};

export type GroupRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupCreateInput>>;
};

export type GroupRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupCreateInput>>;
  disconnect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupWhereUniqueInput>>;
};

export type GroupRelateToOneForCreateInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
};

export type GroupRelateToOneForUpdateInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupUpdateArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateInput = {
  admins?: InputMaybe<UserRelateToManyForUpdateInput>;
  bannerImage?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<CategoryRelateToOneForUpdateInput>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  isFeatured?: InputMaybe<Scalars['String']['input']>;
  joinRequests?: InputMaybe<JoinRequestRelateToManyForUpdateInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  admins?: InputMaybe<UserManyRelationFilter>;
  bannerImage?: InputMaybe<StringFilter>;
  category?: InputMaybe<CategoryWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isFeatured?: InputMaybe<StringNullableFilter>;
  joinRequests?: InputMaybe<JoinRequestManyRelationFilter>;
  location?: InputMaybe<StringFilter>;
  members?: InputMaybe<GroupMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  visibility?: InputMaybe<StringFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type JoinRequestCreateInput = {
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  requestedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type JoinRequestManyRelationFilter = {
  every?: InputMaybe<JoinRequestWhereInput>;
  none?: InputMaybe<JoinRequestWhereInput>;
  some?: InputMaybe<JoinRequestWhereInput>;
};

export type JoinRequestOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  requestedAt?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type JoinRequestRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<JoinRequestWhereUniqueInput>>;
  create?: InputMaybe<Array<JoinRequestCreateInput>>;
};

export type JoinRequestRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<JoinRequestWhereUniqueInput>>;
  create?: InputMaybe<Array<JoinRequestCreateInput>>;
  disconnect?: InputMaybe<Array<JoinRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<JoinRequestWhereUniqueInput>>;
};

export type JoinRequestUpdateArgs = {
  data: JoinRequestUpdateInput;
  where: JoinRequestWhereUniqueInput;
};

export type JoinRequestUpdateInput = {
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  requestedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type JoinRequestWhereInput = {
  AND?: InputMaybe<Array<JoinRequestWhereInput>>;
  NOT?: InputMaybe<Array<JoinRequestWhereInput>>;
  OR?: InputMaybe<Array<JoinRequestWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  requestedAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type JoinRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type LearningSetCreateInput = {
  banner?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<Scalars['String']['input']>;
  course?: InputMaybe<CourseRelateToOneForCreateInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LearningSetManyRelationFilter = {
  every?: InputMaybe<LearningSetWhereInput>;
  none?: InputMaybe<LearningSetWhereInput>;
  some?: InputMaybe<LearningSetWhereInput>;
};

export type LearningSetOrderByInput = {
  banner?: InputMaybe<OrderDirection>;
  bgColor?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  textColor?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type LearningSetRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LearningSetWhereUniqueInput>>;
  create?: InputMaybe<Array<LearningSetCreateInput>>;
};

export type LearningSetRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LearningSetWhereUniqueInput>>;
  create?: InputMaybe<Array<LearningSetCreateInput>>;
  disconnect?: InputMaybe<Array<LearningSetWhereUniqueInput>>;
  set?: InputMaybe<Array<LearningSetWhereUniqueInput>>;
};

export type LearningSetUpdateArgs = {
  data: LearningSetUpdateInput;
  where: LearningSetWhereUniqueInput;
};

export type LearningSetUpdateInput = {
  banner?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<Scalars['String']['input']>;
  course?: InputMaybe<CourseRelateToOneForUpdateInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LearningSetWhereInput = {
  AND?: InputMaybe<Array<LearningSetWhereInput>>;
  NOT?: InputMaybe<Array<LearningSetWhereInput>>;
  OR?: InputMaybe<Array<LearningSetWhereInput>>;
  banner?: InputMaybe<StringFilter>;
  course?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type LearningSetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type LessonCreateInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<CourseRelateToManyForCreateInput>;
  status?: InputMaybe<LessonProgressRelateToOneForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

export type LessonManyRelationFilter = {
  every?: InputMaybe<LessonWhereInput>;
  none?: InputMaybe<LessonWhereInput>;
  some?: InputMaybe<LessonWhereInput>;
};

export type LessonOrderByInput = {
  contentType?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  video?: InputMaybe<OrderDirection>;
};

export type LessonProgressCreateInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  enrollment?: InputMaybe<EnrollmentRelateToOneForCreateInput>;
  lesson?: InputMaybe<LessonRelateToOneForCreateInput>;
};

export type LessonProgressManyRelationFilter = {
  every?: InputMaybe<LessonProgressWhereInput>;
  none?: InputMaybe<LessonProgressWhereInput>;
  some?: InputMaybe<LessonProgressWhereInput>;
};

export type LessonProgressOrderByInput = {
  completed?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type LessonProgressRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LessonProgressWhereUniqueInput>>;
  create?: InputMaybe<Array<LessonProgressCreateInput>>;
};

export type LessonProgressRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LessonProgressWhereUniqueInput>>;
  create?: InputMaybe<Array<LessonProgressCreateInput>>;
  disconnect?: InputMaybe<Array<LessonProgressWhereUniqueInput>>;
  set?: InputMaybe<Array<LessonProgressWhereUniqueInput>>;
};

export type LessonProgressRelateToOneForCreateInput = {
  connect?: InputMaybe<LessonProgressWhereUniqueInput>;
  create?: InputMaybe<LessonProgressCreateInput>;
};

export type LessonProgressRelateToOneForUpdateInput = {
  connect?: InputMaybe<LessonProgressWhereUniqueInput>;
  create?: InputMaybe<LessonProgressCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LessonProgressUpdateArgs = {
  data: LessonProgressUpdateInput;
  where: LessonProgressWhereUniqueInput;
};

export type LessonProgressUpdateInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  enrollment?: InputMaybe<EnrollmentRelateToOneForUpdateInput>;
  lesson?: InputMaybe<LessonRelateToOneForUpdateInput>;
};

export type LessonProgressWhereInput = {
  AND?: InputMaybe<Array<LessonProgressWhereInput>>;
  NOT?: InputMaybe<Array<LessonProgressWhereInput>>;
  OR?: InputMaybe<Array<LessonProgressWhereInput>>;
  completed?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  enrollment?: InputMaybe<EnrollmentWhereInput>;
  id?: InputMaybe<IdFilter>;
  lesson?: InputMaybe<LessonWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type LessonProgressWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type LessonRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  create?: InputMaybe<Array<LessonCreateInput>>;
};

export type LessonRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  create?: InputMaybe<Array<LessonCreateInput>>;
  disconnect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  set?: InputMaybe<Array<LessonWhereUniqueInput>>;
};

export type LessonRelateToOneForCreateInput = {
  connect?: InputMaybe<LessonWhereUniqueInput>;
  create?: InputMaybe<LessonCreateInput>;
};

export type LessonRelateToOneForUpdateInput = {
  connect?: InputMaybe<LessonWhereUniqueInput>;
  create?: InputMaybe<LessonCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LessonUpdateArgs = {
  data: LessonUpdateInput;
  where: LessonWhereUniqueInput;
};

export type LessonUpdateInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<CourseRelateToManyForUpdateInput>;
  status?: InputMaybe<LessonProgressRelateToOneForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

export type LessonWhereInput = {
  AND?: InputMaybe<Array<LessonWhereInput>>;
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  OR?: InputMaybe<Array<LessonWhereInput>>;
  contentType?: InputMaybe<StringNullableFilter>;
  courses?: InputMaybe<CourseManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  status?: InputMaybe<LessonProgressWhereInput>;
  title?: InputMaybe<StringFilter>;
  video?: InputMaybe<StringFilter>;
};

export type LessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type LikeCreateInput = {
  post?: InputMaybe<PostRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type LikeManyRelationFilter = {
  every?: InputMaybe<LikeWhereInput>;
  none?: InputMaybe<LikeWhereInput>;
  some?: InputMaybe<LikeWhereInput>;
};

export type LikeOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type LikeRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  create?: InputMaybe<Array<LikeCreateInput>>;
};

export type LikeRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  create?: InputMaybe<Array<LikeCreateInput>>;
  disconnect?: InputMaybe<Array<LikeWhereUniqueInput>>;
  set?: InputMaybe<Array<LikeWhereUniqueInput>>;
};

export type LikeUpdateArgs = {
  data: LikeUpdateInput;
  where: LikeWhereUniqueInput;
};

export type LikeUpdateInput = {
  post?: InputMaybe<PostRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type LikeWhereInput = {
  AND?: InputMaybe<Array<LikeWhereInput>>;
  NOT?: InputMaybe<Array<LikeWhereInput>>;
  OR?: InputMaybe<Array<LikeWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  post?: InputMaybe<PostWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type LikeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MessageCreateInput = {
  chat?: InputMaybe<ChatRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  recipients?: InputMaybe<MessageRecipientRelateToManyForCreateInput>;
  sender?: InputMaybe<UserRelateToOneForCreateInput>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageManyRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  timestamp?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type MessageRecipientCreateInput = {
  message?: InputMaybe<MessageRelateToOneForCreateInput>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  readTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type MessageRecipientManyRelationFilter = {
  every?: InputMaybe<MessageRecipientWhereInput>;
  none?: InputMaybe<MessageRecipientWhereInput>;
  some?: InputMaybe<MessageRecipientWhereInput>;
};

export type MessageRecipientOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  read?: InputMaybe<OrderDirection>;
  readTimestamp?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type MessageRecipientRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  create?: InputMaybe<Array<MessageRecipientCreateInput>>;
};

export type MessageRecipientRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  create?: InputMaybe<Array<MessageRecipientCreateInput>>;
  disconnect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
};

export type MessageRecipientUpdateArgs = {
  data: MessageRecipientUpdateInput;
  where: MessageRecipientWhereUniqueInput;
};

export type MessageRecipientUpdateInput = {
  message?: InputMaybe<MessageRelateToOneForUpdateInput>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  readTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type MessageRecipientWhereInput = {
  AND?: InputMaybe<Array<MessageRecipientWhereInput>>;
  NOT?: InputMaybe<Array<MessageRecipientWhereInput>>;
  OR?: InputMaybe<Array<MessageRecipientWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<MessageWhereInput>;
  read?: InputMaybe<BooleanFilter>;
  readTimestamp?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type MessageRecipientWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MessageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  create?: InputMaybe<Array<MessageCreateInput>>;
};

export type MessageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  create?: InputMaybe<Array<MessageCreateInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
};

export type MessageRelateToOneForCreateInput = {
  connect?: InputMaybe<MessageWhereUniqueInput>;
  create?: InputMaybe<MessageCreateInput>;
};

export type MessageRelateToOneForUpdateInput = {
  connect?: InputMaybe<MessageWhereUniqueInput>;
  create?: InputMaybe<MessageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MessageUpdateArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateInput = {
  chat?: InputMaybe<ChatRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  recipients?: InputMaybe<MessageRecipientRelateToManyForUpdateInput>;
  sender?: InputMaybe<UserRelateToOneForUpdateInput>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  chat?: InputMaybe<ChatWhereInput>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  recipients?: InputMaybe<MessageRecipientManyRelationFilter>;
  sender?: InputMaybe<UserWhereInput>;
  timestamp?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  isFlagged?: InputMaybe<Scalars['Boolean']['input']>;
  sent?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type NotificationManyRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  expiryDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isFlagged?: InputMaybe<OrderDirection>;
  sent?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type NotificationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<NotificationCreateInput>>;
};

export type NotificationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<NotificationCreateInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
};

export type NotificationUpdateArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  isFlagged?: InputMaybe<Scalars['Boolean']['input']>;
  sent?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isFlagged?: InputMaybe<BooleanFilter>;
  sent?: InputMaybe<BooleanFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  community?: InputMaybe<CommunityRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  isFlagged?: InputMaybe<Scalars['Boolean']['input']>;
  likes?: InputMaybe<LikeRelateToManyForCreateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isFlagged?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  visibility?: InputMaybe<OrderDirection>;
};

export type PostRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostRelateToOneForCreateInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  create?: InputMaybe<PostCreateInput>;
};

export type PostRelateToOneForUpdateInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  create?: InputMaybe<PostCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostScheduleCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupRelateToManyForCreateInput>;
  hashtags?: InputMaybe<Scalars['JSON']['input']>;
  post?: InputMaybe<PostRelateToOneForCreateInput>;
  scheduledDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type PostScheduleOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  frequency?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  scheduledDate?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PostScheduleUpdateArgs = {
  data: PostScheduleUpdateInput;
  where: PostScheduleWhereUniqueInput;
};

export type PostScheduleUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupRelateToManyForUpdateInput>;
  hashtags?: InputMaybe<Scalars['JSON']['input']>;
  post?: InputMaybe<PostRelateToOneForUpdateInput>;
  scheduledDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type PostScheduleWhereInput = {
  AND?: InputMaybe<Array<PostScheduleWhereInput>>;
  NOT?: InputMaybe<Array<PostScheduleWhereInput>>;
  OR?: InputMaybe<Array<PostScheduleWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  frequency?: InputMaybe<StringNullableFilter>;
  groups?: InputMaybe<GroupManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  post?: InputMaybe<PostWhereInput>;
  scheduledDate?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type PostScheduleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  community?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  isFlagged?: InputMaybe<Scalars['Boolean']['input']>;
  likes?: InputMaybe<LikeRelateToManyForUpdateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  community?: InputMaybe<CommunityWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  isFlagged?: InputMaybe<BooleanFilter>;
  likes?: InputMaybe<LikeManyRelationFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  visibility?: InputMaybe<StringNullableFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PrivacyAndTermCreateInput = {
  privacy?: InputMaybe<Scalars['String']['input']>;
  terms?: InputMaybe<Scalars['String']['input']>;
};

export type PrivacyAndTermOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  privacy?: InputMaybe<OrderDirection>;
  terms?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PrivacyAndTermUpdateArgs = {
  data: PrivacyAndTermUpdateInput;
  where: PrivacyAndTermWhereUniqueInput;
};

export type PrivacyAndTermUpdateInput = {
  privacy?: InputMaybe<Scalars['String']['input']>;
  terms?: InputMaybe<Scalars['String']['input']>;
};

export type PrivacyAndTermWhereInput = {
  AND?: InputMaybe<Array<PrivacyAndTermWhereInput>>;
  NOT?: InputMaybe<Array<PrivacyAndTermWhereInput>>;
  OR?: InputMaybe<Array<PrivacyAndTermWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  privacy?: InputMaybe<StringFilter>;
  terms?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type PrivacyAndTermWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PushNotificationSettingCreateInput = {
  commentsFromPeople?: InputMaybe<Scalars['Boolean']['input']>;
  commentsOnPosts?: InputMaybe<Scalars['Boolean']['input']>;
  enablePushNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  liveStreams?: InputMaybe<Scalars['Boolean']['input']>;
  mentions?: InputMaybe<Scalars['Boolean']['input']>;
  messageRequests?: InputMaybe<Scalars['Boolean']['input']>;
  newMessages?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type PushNotificationSettingOrderByInput = {
  commentsFromPeople?: InputMaybe<OrderDirection>;
  commentsOnPosts?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  enablePushNotifications?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  liveStreams?: InputMaybe<OrderDirection>;
  mentions?: InputMaybe<OrderDirection>;
  messageRequests?: InputMaybe<OrderDirection>;
  newMessages?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PushNotificationSettingRelateToOneForCreateInput = {
  connect?: InputMaybe<PushNotificationSettingWhereUniqueInput>;
  create?: InputMaybe<PushNotificationSettingCreateInput>;
};

export type PushNotificationSettingRelateToOneForUpdateInput = {
  connect?: InputMaybe<PushNotificationSettingWhereUniqueInput>;
  create?: InputMaybe<PushNotificationSettingCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PushNotificationSettingUpdateArgs = {
  data: PushNotificationSettingUpdateInput;
  where: PushNotificationSettingWhereUniqueInput;
};

export type PushNotificationSettingUpdateInput = {
  commentsFromPeople?: InputMaybe<Scalars['Boolean']['input']>;
  commentsOnPosts?: InputMaybe<Scalars['Boolean']['input']>;
  enablePushNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  liveStreams?: InputMaybe<Scalars['Boolean']['input']>;
  mentions?: InputMaybe<Scalars['Boolean']['input']>;
  messageRequests?: InputMaybe<Scalars['Boolean']['input']>;
  newMessages?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type PushNotificationSettingWhereInput = {
  AND?: InputMaybe<Array<PushNotificationSettingWhereInput>>;
  NOT?: InputMaybe<Array<PushNotificationSettingWhereInput>>;
  OR?: InputMaybe<Array<PushNotificationSettingWhereInput>>;
  commentsFromPeople?: InputMaybe<BooleanFilter>;
  commentsOnPosts?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  enablePushNotifications?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  liveStreams?: InputMaybe<BooleanFilter>;
  mentions?: InputMaybe<BooleanFilter>;
  messageRequests?: InputMaybe<BooleanFilter>;
  newMessages?: InputMaybe<BooleanFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type PushNotificationSettingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QaCreateInput = {
  answeredAt?: InputMaybe<Scalars['DateTime']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  staff?: InputMaybe<UserRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type QaOrderByInput = {
  answeredAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  question?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type QaUpdateArgs = {
  data: QaUpdateInput;
  where: QaWhereUniqueInput;
};

export type QaUpdateInput = {
  answeredAt?: InputMaybe<Scalars['DateTime']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  staff?: InputMaybe<UserRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type QaWhereInput = {
  AND?: InputMaybe<Array<QaWhereInput>>;
  NOT?: InputMaybe<Array<QaWhereInput>>;
  OR?: InputMaybe<Array<QaWhereInput>>;
  answeredAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  question?: InputMaybe<StringFilter>;
  staff?: InputMaybe<UserWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  user?: InputMaybe<UserWhereInput>;
};

export type QaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ReferralCreateInput = {
  referredBy?: InputMaybe<UserRelateToOneForCreateInput>;
  referredUser?: InputMaybe<UserRelateToOneForCreateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ReferralManyRelationFilter = {
  every?: InputMaybe<ReferralWhereInput>;
  none?: InputMaybe<ReferralWhereInput>;
  some?: InputMaybe<ReferralWhereInput>;
};

export type ReferralOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ReferralRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  create?: InputMaybe<Array<ReferralCreateInput>>;
};

export type ReferralRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  create?: InputMaybe<Array<ReferralCreateInput>>;
  disconnect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  set?: InputMaybe<Array<ReferralWhereUniqueInput>>;
};

export type ReferralUpdateArgs = {
  data: ReferralUpdateInput;
  where: ReferralWhereUniqueInput;
};

export type ReferralUpdateInput = {
  referredBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  referredUser?: InputMaybe<UserRelateToOneForUpdateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ReferralWhereInput = {
  AND?: InputMaybe<Array<ReferralWhereInput>>;
  NOT?: InputMaybe<Array<ReferralWhereInput>>;
  OR?: InputMaybe<Array<ReferralWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  referredBy?: InputMaybe<UserWhereInput>;
  referredUser?: InputMaybe<UserWhereInput>;
  status?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ReferralWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SubCategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subSubCategory?: InputMaybe<SubSubCategoryRelateToManyForCreateInput>;
};

export type SubCategoryManyRelationFilter = {
  every?: InputMaybe<SubCategoryWhereInput>;
  none?: InputMaybe<SubCategoryWhereInput>;
  some?: InputMaybe<SubCategoryWhereInput>;
};

export type SubCategoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type SubCategoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<SubCategoryCreateInput>>;
};

export type SubCategoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<SubCategoryCreateInput>>;
  disconnect?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
};

export type SubCategoryUpdateArgs = {
  data: SubCategoryUpdateInput;
  where: SubCategoryWhereUniqueInput;
};

export type SubCategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subSubCategory?: InputMaybe<SubSubCategoryRelateToManyForUpdateInput>;
};

export type SubCategoryWhereInput = {
  AND?: InputMaybe<Array<SubCategoryWhereInput>>;
  NOT?: InputMaybe<Array<SubCategoryWhereInput>>;
  OR?: InputMaybe<Array<SubCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  subSubCategory?: InputMaybe<SubSubCategoryManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type SubCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SubSubCategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sunSubCategory?: InputMaybe<SubSubCategoryRelateToManyForCreateInput>;
};

export type SubSubCategoryManyRelationFilter = {
  every?: InputMaybe<SubSubCategoryWhereInput>;
  none?: InputMaybe<SubSubCategoryWhereInput>;
  some?: InputMaybe<SubSubCategoryWhereInput>;
};

export type SubSubCategoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type SubSubCategoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SubSubCategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<SubSubCategoryCreateInput>>;
};

export type SubSubCategoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SubSubCategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<SubSubCategoryCreateInput>>;
  disconnect?: InputMaybe<Array<SubSubCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<SubSubCategoryWhereUniqueInput>>;
};

export type SubSubCategoryUpdateArgs = {
  data: SubSubCategoryUpdateInput;
  where: SubSubCategoryWhereUniqueInput;
};

export type SubSubCategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sunSubCategory?: InputMaybe<SubSubCategoryRelateToManyForUpdateInput>;
};

export type SubSubCategoryWhereInput = {
  AND?: InputMaybe<Array<SubSubCategoryWhereInput>>;
  NOT?: InputMaybe<Array<SubSubCategoryWhereInput>>;
  OR?: InputMaybe<Array<SubSubCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sunSubCategory?: InputMaybe<SubSubCategoryManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type SubSubCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SurveyCreateInput = {
  choices?: InputMaybe<Scalars['JSON']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  question?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyOrderByInput = {
  closedAt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  question?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type SurveyUpdateArgs = {
  data: SurveyUpdateInput;
  where: SurveyWhereUniqueInput;
};

export type SurveyUpdateInput = {
  choices?: InputMaybe<Scalars['JSON']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  question?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SurveyWhereInput = {
  AND?: InputMaybe<Array<SurveyWhereInput>>;
  NOT?: InputMaybe<Array<SurveyWhereInput>>;
  OR?: InputMaybe<Array<SurveyWhereInput>>;
  closedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  question?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type SurveyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TagCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserCreateInput = {
  aboutYourself?: InputMaybe<Scalars['String']['input']>;
  ageRange?: InputMaybe<Scalars['String']['input']>;
  assistance?: InputMaybe<Scalars['String']['input']>;
  birthMonth?: InputMaybe<Scalars['String']['input']>;
  chatMembers?: InputMaybe<ChatMemberRelateToManyForCreateInput>;
  collegeUniversity?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  community?: InputMaybe<CommunityRelateToOneForCreateInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactInfo?: InputMaybe<Scalars['JSON']['input']>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  educationStatus?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employmentStatus?: InputMaybe<Scalars['String']['input']>;
  enrollments?: InputMaybe<EnrollmentRelateToManyForCreateInput>;
  favoriteColor?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<UserRelateToManyForCreateInput>;
  following?: InputMaybe<UserRelateToManyForCreateInput>;
  foodClothingSupport?: InputMaybe<Scalars['String']['input']>;
  groupManaged?: InputMaybe<GroupRelateToManyForCreateInput>;
  groups?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  heardAboutApp?: InputMaybe<Scalars['String']['input']>;
  housingSupport?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Scalars['JSON']['input']>;
  isAboutYourselfPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isBirthMonthPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isCollegeUniversityPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isCompanyNamePublic?: InputMaybe<Scalars['Boolean']['input']>;
  isContactPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isDobPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isEducationStatusPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isEmploymentStatusPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isFavoriteColorPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isHousingSupportPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isInterestsPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isLastNamePublic?: InputMaybe<Scalars['Boolean']['input']>;
  isProfileCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isPronounPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isRefererPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isZipCodePublic?: InputMaybe<Scalars['Boolean']['input']>;
  joinRequests?: InputMaybe<JoinRequestRelateToManyForCreateInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<LikeRelateToManyForCreateInput>;
  messagesSent?: InputMaybe<MessageRelateToManyForCreateInput>;
  notifications?: InputMaybe<NotificationRelateToManyForCreateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  pronoun?: InputMaybe<Scalars['String']['input']>;
  pushNotificationSettings?: InputMaybe<PushNotificationSettingRelateToOneForCreateInput>;
  refererDetails?: InputMaybe<UserRelateToOneForCreateInput>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralRelateToManyForCreateInput>;
  shadowBanned?: InputMaybe<Scalars['Boolean']['input']>;
  socialFields?: InputMaybe<Scalars['JSON']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  userType?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  aboutYourself?: InputMaybe<OrderDirection>;
  ageRange?: InputMaybe<OrderDirection>;
  assistance?: InputMaybe<OrderDirection>;
  birthMonth?: InputMaybe<OrderDirection>;
  collegeUniversity?: InputMaybe<OrderDirection>;
  companyName?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  dob?: InputMaybe<OrderDirection>;
  educationStatus?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  employmentStatus?: InputMaybe<OrderDirection>;
  favoriteColor?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  foodClothingSupport?: InputMaybe<OrderDirection>;
  heardAboutApp?: InputMaybe<OrderDirection>;
  housingSupport?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAboutYourselfPublic?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  isBirthMonthPublic?: InputMaybe<OrderDirection>;
  isCollegeUniversityPublic?: InputMaybe<OrderDirection>;
  isCompanyNamePublic?: InputMaybe<OrderDirection>;
  isContactPublic?: InputMaybe<OrderDirection>;
  isDobPublic?: InputMaybe<OrderDirection>;
  isEducationStatusPublic?: InputMaybe<OrderDirection>;
  isEmailPublic?: InputMaybe<OrderDirection>;
  isEmploymentStatusPublic?: InputMaybe<OrderDirection>;
  isFavoriteColorPublic?: InputMaybe<OrderDirection>;
  isHousingSupportPublic?: InputMaybe<OrderDirection>;
  isInterestsPublic?: InputMaybe<OrderDirection>;
  isLastNamePublic?: InputMaybe<OrderDirection>;
  isProfileCompleted?: InputMaybe<OrderDirection>;
  isPronounPublic?: InputMaybe<OrderDirection>;
  isRefererPublic?: InputMaybe<OrderDirection>;
  isZipCodePublic?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  pronoun?: InputMaybe<OrderDirection>;
  referralCode?: InputMaybe<OrderDirection>;
  shadowBanned?: InputMaybe<OrderDirection>;
  theme?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  userType?: InputMaybe<OrderDirection>;
  verified?: InputMaybe<OrderDirection>;
  zipCode?: InputMaybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  aboutYourself?: InputMaybe<Scalars['String']['input']>;
  ageRange?: InputMaybe<Scalars['String']['input']>;
  assistance?: InputMaybe<Scalars['String']['input']>;
  birthMonth?: InputMaybe<Scalars['String']['input']>;
  chatMembers?: InputMaybe<ChatMemberRelateToManyForUpdateInput>;
  collegeUniversity?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  community?: InputMaybe<CommunityRelateToOneForUpdateInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactInfo?: InputMaybe<Scalars['JSON']['input']>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  educationStatus?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employmentStatus?: InputMaybe<Scalars['String']['input']>;
  enrollments?: InputMaybe<EnrollmentRelateToManyForUpdateInput>;
  favoriteColor?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<UserRelateToManyForUpdateInput>;
  following?: InputMaybe<UserRelateToManyForUpdateInput>;
  foodClothingSupport?: InputMaybe<Scalars['String']['input']>;
  groupManaged?: InputMaybe<GroupRelateToManyForUpdateInput>;
  groups?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  heardAboutApp?: InputMaybe<Scalars['String']['input']>;
  housingSupport?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Scalars['JSON']['input']>;
  isAboutYourselfPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isBirthMonthPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isCollegeUniversityPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isCompanyNamePublic?: InputMaybe<Scalars['Boolean']['input']>;
  isContactPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isDobPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isEducationStatusPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isEmploymentStatusPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isFavoriteColorPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isHousingSupportPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isInterestsPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isLastNamePublic?: InputMaybe<Scalars['Boolean']['input']>;
  isProfileCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isPronounPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isRefererPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isZipCodePublic?: InputMaybe<Scalars['Boolean']['input']>;
  joinRequests?: InputMaybe<JoinRequestRelateToManyForUpdateInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<LikeRelateToManyForUpdateInput>;
  messagesSent?: InputMaybe<MessageRelateToManyForUpdateInput>;
  notifications?: InputMaybe<NotificationRelateToManyForUpdateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  pronoun?: InputMaybe<Scalars['String']['input']>;
  pushNotificationSettings?: InputMaybe<PushNotificationSettingRelateToOneForUpdateInput>;
  refererDetails?: InputMaybe<UserRelateToOneForUpdateInput>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralRelateToManyForUpdateInput>;
  shadowBanned?: InputMaybe<Scalars['Boolean']['input']>;
  socialFields?: InputMaybe<Scalars['JSON']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  userType?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  aboutYourself?: InputMaybe<StringFilter>;
  ageRange?: InputMaybe<StringFilter>;
  assistance?: InputMaybe<StringNullableFilter>;
  birthMonth?: InputMaybe<StringNullableFilter>;
  chatMembers?: InputMaybe<ChatMemberManyRelationFilter>;
  collegeUniversity?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  community?: InputMaybe<CommunityWhereInput>;
  companyName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  educationStatus?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  employmentStatus?: InputMaybe<StringFilter>;
  enrollments?: InputMaybe<EnrollmentManyRelationFilter>;
  favoriteColor?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  followers?: InputMaybe<UserManyRelationFilter>;
  following?: InputMaybe<UserManyRelationFilter>;
  foodClothingSupport?: InputMaybe<StringNullableFilter>;
  groupManaged?: InputMaybe<GroupManyRelationFilter>;
  groups?: InputMaybe<GroupMemberManyRelationFilter>;
  heardAboutApp?: InputMaybe<StringFilter>;
  housingSupport?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isAboutYourselfPublic?: InputMaybe<BooleanFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  isBirthMonthPublic?: InputMaybe<BooleanFilter>;
  isCollegeUniversityPublic?: InputMaybe<BooleanFilter>;
  isCompanyNamePublic?: InputMaybe<BooleanFilter>;
  isContactPublic?: InputMaybe<BooleanFilter>;
  isDobPublic?: InputMaybe<BooleanFilter>;
  isEducationStatusPublic?: InputMaybe<BooleanFilter>;
  isEmailPublic?: InputMaybe<BooleanFilter>;
  isEmploymentStatusPublic?: InputMaybe<BooleanFilter>;
  isFavoriteColorPublic?: InputMaybe<BooleanFilter>;
  isHousingSupportPublic?: InputMaybe<BooleanFilter>;
  isInterestsPublic?: InputMaybe<BooleanFilter>;
  isLastNamePublic?: InputMaybe<BooleanFilter>;
  isProfileCompleted?: InputMaybe<BooleanFilter>;
  isPronounPublic?: InputMaybe<BooleanFilter>;
  isRefererPublic?: InputMaybe<BooleanFilter>;
  isZipCodePublic?: InputMaybe<BooleanFilter>;
  joinRequests?: InputMaybe<JoinRequestManyRelationFilter>;
  lastName?: InputMaybe<StringFilter>;
  likes?: InputMaybe<LikeManyRelationFilter>;
  messagesSent?: InputMaybe<MessageManyRelationFilter>;
  notifications?: InputMaybe<NotificationManyRelationFilter>;
  phone?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  pronoun?: InputMaybe<StringFilter>;
  pushNotificationSettings?: InputMaybe<PushNotificationSettingWhereInput>;
  refererDetails?: InputMaybe<UserWhereInput>;
  referralCode?: InputMaybe<StringFilter>;
  referrals?: InputMaybe<ReferralManyRelationFilter>;
  shadowBanned?: InputMaybe<BooleanFilter>;
  theme?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userType?: InputMaybe<StringNullableFilter>;
  verified?: InputMaybe<BooleanFilter>;
  zipCode?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type VideoResourceCreateInput = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<CategoryRelateToOneForCreateInput>;
  courses?: InputMaybe<CourseRelateToOneForCreateInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type VideoResourceManyRelationFilter = {
  every?: InputMaybe<VideoResourceWhereInput>;
  none?: InputMaybe<VideoResourceWhereInput>;
  some?: InputMaybe<VideoResourceWhereInput>;
};

export type VideoResourceOrderByInput = {
  bgColor?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  textColor?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type VideoResourceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<VideoResourceWhereUniqueInput>>;
  create?: InputMaybe<Array<VideoResourceCreateInput>>;
};

export type VideoResourceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<VideoResourceWhereUniqueInput>>;
  create?: InputMaybe<Array<VideoResourceCreateInput>>;
  disconnect?: InputMaybe<Array<VideoResourceWhereUniqueInput>>;
  set?: InputMaybe<Array<VideoResourceWhereUniqueInput>>;
};

export type VideoResourceUpdateArgs = {
  data: VideoResourceUpdateInput;
  where: VideoResourceWhereUniqueInput;
};

export type VideoResourceUpdateInput = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<CategoryRelateToOneForUpdateInput>;
  courses?: InputMaybe<CourseRelateToOneForUpdateInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type VideoResourceWhereInput = {
  AND?: InputMaybe<Array<VideoResourceWhereInput>>;
  NOT?: InputMaybe<Array<VideoResourceWhereInput>>;
  OR?: InputMaybe<Array<VideoResourceWhereInput>>;
  category?: InputMaybe<CategoryWhereInput>;
  courses?: InputMaybe<CourseWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<StringFilter>;
};

export type VideoResourceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticateUserWithPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AuthenticateUserWithPasswordMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure' } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, firstName?: string | null, email?: string | null } } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, email?: string | null, createdAt?: any | null, postsCount?: number | null } | null };


export const AuthenticateUserWithPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateUserWithPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AuthenticateUserWithPasswordMutation, AuthenticateUserWithPasswordMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"postsCount"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;