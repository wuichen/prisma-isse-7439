import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  logs: Array<Log>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type AdminLogsArgs = {
  cursor?: Maybe<LogWhereUniqueInput>;
  distinct?: Maybe<LogScalarFieldEnum>;
  orderBy?: Maybe<LogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LogWhereInput>;
};

export type AdminAvgAggregateOutputType = {
  __typename?: 'AdminAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type AdminCountAggregateOutputType = {
  __typename?: 'AdminCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
};

export type AdminCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  logs?: Maybe<LogCreateNestedManyWithoutAuthorInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type AdminCreateNestedOneWithoutLogsInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutLogsInput>;
  create?: Maybe<AdminUncheckedCreateWithoutLogsInput>;
};

export type AdminCreateOrConnectWithoutLogsInput = {
  create: AdminUncheckedCreateWithoutLogsInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateWithoutLogsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type AdminMaxAggregateOutputType = {
  __typename?: 'AdminMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type AdminMinAggregateOutputType = {
  __typename?: 'AdminMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type AdminOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type AdminRelationFilter = {
  is?: Maybe<AdminWhereInput>;
  isNot?: Maybe<AdminWhereInput>;
};

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password'
}

export type AdminScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<AdminScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<AdminScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<AdminScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
};

export type AdminSumAggregateOutputType = {
  __typename?: 'AdminSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type AdminUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  logs?: Maybe<LogUncheckedCreateNestedManyWithoutAuthorInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type AdminUncheckedCreateWithoutLogsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type AdminUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  logs?: Maybe<LogUncheckedUpdateManyWithoutAuthorInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUncheckedUpdateWithoutLogsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  logs?: Maybe<LogUpdateManyWithoutAuthorInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateOneWithoutLogsInput = {
  connect?: Maybe<AdminWhereUniqueInput>;
  connectOrCreate?: Maybe<AdminCreateOrConnectWithoutLogsInput>;
  create?: Maybe<AdminUncheckedCreateWithoutLogsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AdminUncheckedUpdateWithoutLogsInput>;
  upsert?: Maybe<AdminUpsertWithoutLogsInput>;
};

export type AdminUpdateWithoutLogsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpsertWithoutLogsInput = {
  create: AdminUncheckedCreateWithoutLogsInput;
  update: AdminUncheckedUpdateWithoutLogsInput;
};

export type AdminWhereInput = {
  AND?: Maybe<Array<Maybe<AdminWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AdminWhereInput>>>;
  OR?: Maybe<Array<Maybe<AdminWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  logs?: Maybe<LogListRelationFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringFilter>;
};

export type AdminWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type AggregateAdmin = {
  __typename?: 'AggregateAdmin';
  _avg?: Maybe<AdminAvgAggregateOutputType>;
  _count?: Maybe<AdminCountAggregateOutputType>;
  _max?: Maybe<AdminMaxAggregateOutputType>;
  _min?: Maybe<AdminMinAggregateOutputType>;
  _sum?: Maybe<AdminSumAggregateOutputType>;
  avg?: Maybe<AdminAvgAggregateOutputType>;
  count?: Maybe<AdminCountAggregateOutputType>;
  max?: Maybe<AdminMaxAggregateOutputType>;
  min?: Maybe<AdminMinAggregateOutputType>;
  sum?: Maybe<AdminSumAggregateOutputType>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _avg?: Maybe<CommentAvgAggregateOutputType>;
  _count?: Maybe<CommentCountAggregateOutputType>;
  _max?: Maybe<CommentMaxAggregateOutputType>;
  _min?: Maybe<CommentMinAggregateOutputType>;
  _sum?: Maybe<CommentSumAggregateOutputType>;
  avg?: Maybe<CommentAvgAggregateOutputType>;
  count?: Maybe<CommentCountAggregateOutputType>;
  max?: Maybe<CommentMaxAggregateOutputType>;
  min?: Maybe<CommentMinAggregateOutputType>;
  sum?: Maybe<CommentSumAggregateOutputType>;
};

export type AggregateGroup = {
  __typename?: 'AggregateGroup';
  _avg?: Maybe<GroupAvgAggregateOutputType>;
  _count?: Maybe<GroupCountAggregateOutputType>;
  _max?: Maybe<GroupMaxAggregateOutputType>;
  _min?: Maybe<GroupMinAggregateOutputType>;
  _sum?: Maybe<GroupSumAggregateOutputType>;
  avg?: Maybe<GroupAvgAggregateOutputType>;
  count?: Maybe<GroupCountAggregateOutputType>;
  max?: Maybe<GroupMaxAggregateOutputType>;
  min?: Maybe<GroupMinAggregateOutputType>;
  sum?: Maybe<GroupSumAggregateOutputType>;
};

export type AggregateLog = {
  __typename?: 'AggregateLog';
  _avg?: Maybe<LogAvgAggregateOutputType>;
  _count?: Maybe<LogCountAggregateOutputType>;
  _max?: Maybe<LogMaxAggregateOutputType>;
  _min?: Maybe<LogMinAggregateOutputType>;
  _sum?: Maybe<LogSumAggregateOutputType>;
  avg?: Maybe<LogAvgAggregateOutputType>;
  count?: Maybe<LogCountAggregateOutputType>;
  max?: Maybe<LogMaxAggregateOutputType>;
  min?: Maybe<LogMinAggregateOutputType>;
  sum?: Maybe<LogSumAggregateOutputType>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _avg?: Maybe<PostAvgAggregateOutputType>;
  _count?: Maybe<PostCountAggregateOutputType>;
  _max?: Maybe<PostMaxAggregateOutputType>;
  _min?: Maybe<PostMinAggregateOutputType>;
  _sum?: Maybe<PostSumAggregateOutputType>;
  avg?: Maybe<PostAvgAggregateOutputType>;
  count?: Maybe<PostCountAggregateOutputType>;
  max?: Maybe<PostMaxAggregateOutputType>;
  min?: Maybe<PostMinAggregateOutputType>;
  sum?: Maybe<PostSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
  avg?: Maybe<UserAvgAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};


export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  post: Post;
  postId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CommentAvgAggregateOutputType = {
  __typename?: 'CommentAvgAggregateOutputType';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  contain: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  postId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CommentCreateInput = {
  author?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
};

export type CommentCreateOrConnectWithoutAuthorInput = {
  create: CommentUncheckedCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentUncheckedCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutPostInput = {
  author?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: 'CommentMaxAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentOrderByInput = {
  authorId?: Maybe<SortOrder>;
  contain?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  AuthorId = 'authorId',
  Contain = 'contain',
  CreatedAt = 'createdAt',
  Id = 'id',
  PostId = 'postId',
  UpdatedAt = 'updatedAt'
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  authorId?: Maybe<IntNullableFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  authorId?: Maybe<IntNullableWithAggregatesFilter>;
  contain?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  postId?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CommentSumAggregateOutputType = {
  __typename?: 'CommentSumAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
};

export type CommentUncheckedCreateInput = {
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
};

export type CommentUncheckedCreateNestedManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
};

export type CommentUncheckedCreateWithoutAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateWithoutPostInput = {
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUncheckedUpdateInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  postId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  postId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type CommentUncheckedUpdateManyWithoutCommentsInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  postId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutPostInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutPostInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutPostInput>>>;
};

export type CommentUncheckedUpdateWithoutAuthorInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  postId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutPostInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type CommentUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutPostInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutPostInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutPostInput>>>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUncheckedUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUncheckedUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutAuthorInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPostInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentUncheckedCreateWithoutAuthorInput;
  update: CommentUncheckedUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentUncheckedCreateWithoutPostInput;
  update: CommentUncheckedUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<Maybe<CommentWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CommentWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentWhereInput>>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};


export type GroupUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type GroupAvgAggregateOutputType = {
  __typename?: 'GroupAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type GroupCountAggregateOutputType = {
  __typename?: 'GroupCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GroupCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserCreateNestedManyWithoutGroupInput>;
};

export type GroupCreateNestedOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  connectOrCreate?: Maybe<GroupCreateOrConnectWithoutUsersInput>;
  create?: Maybe<GroupUncheckedCreateWithoutUsersInput>;
};

export type GroupCreateOrConnectWithoutUsersInput = {
  create: GroupUncheckedCreateWithoutUsersInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMaxAggregateOutputType = {
  __typename?: 'GroupMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMinAggregateOutputType = {
  __typename?: 'GroupMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GroupRelationFilter = {
  is?: Maybe<GroupWhereInput>;
  isNot?: Maybe<GroupWhereInput>;
};

export enum GroupScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GroupScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<GroupScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<GroupScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<GroupScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type GroupSumAggregateOutputType = {
  __typename?: 'GroupSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type GroupUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserUncheckedCreateNestedManyWithoutGroupInput>;
};

export type GroupUncheckedCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUncheckedUpdateManyWithoutGroupInput>;
};

export type GroupUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUncheckedUpdateWithoutUsersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

export type GroupUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  connectOrCreate?: Maybe<GroupCreateOrConnectWithoutUsersInput>;
  create?: Maybe<GroupUncheckedCreateWithoutUsersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GroupUncheckedUpdateWithoutUsersInput>;
  upsert?: Maybe<GroupUpsertWithoutUsersInput>;
};

export type GroupUpdateWithoutUsersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpsertWithoutUsersInput = {
  create: GroupUncheckedCreateWithoutUsersInput;
  update: GroupUncheckedUpdateWithoutUsersInput;
};

export type GroupWhereInput = {
  AND?: Maybe<Array<Maybe<GroupWhereInput>>>;
  NOT?: Maybe<Array<Maybe<GroupWhereInput>>>;
  OR?: Maybe<Array<Maybe<GroupWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntNullableFilter>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntFilter>;
};


export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Log = {
  __typename?: 'Log';
  author?: Maybe<Admin>;
  authorId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LogAvgAggregateOutputType = {
  __typename?: 'LogAvgAggregateOutputType';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type LogCountAggregateOutputType = {
  __typename?: 'LogCountAggregateOutputType';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type LogCreateInput = {
  author?: Maybe<AdminCreateNestedOneWithoutLogsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LogCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<LogCreateWithoutAuthorInput>>>;
};

export type LogCreateOrConnectWithoutAuthorInput = {
  create: LogUncheckedCreateWithoutAuthorInput;
  where: LogWhereUniqueInput;
};

export type LogCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogListRelationFilter = {
  every?: Maybe<LogWhereInput>;
  none?: Maybe<LogWhereInput>;
  some?: Maybe<LogWhereInput>;
};

export type LogMaxAggregateOutputType = {
  __typename?: 'LogMaxAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogMinAggregateOutputType = {
  __typename?: 'LogMinAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogOrderByInput = {
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum LogScalarFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type LogScalarWhereInput = {
  AND?: Maybe<Array<Maybe<LogScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<LogScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<LogScalarWhereInput>>>;
  authorId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type LogScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<LogScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<LogScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<LogScalarWhereWithAggregatesInput>>>;
  authorId?: Maybe<IntNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type LogSumAggregateOutputType = {
  __typename?: 'LogSumAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type LogUncheckedCreateInput = {
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LogCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<LogCreateWithoutAuthorInput>>>;
};

export type LogUncheckedCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogUncheckedUpdateInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogUncheckedUpdateManyInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogUncheckedUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LogCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<LogCreateWithoutAuthorInput>>>;
  delete?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<LogScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<LogUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<LogUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<LogUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type LogUncheckedUpdateManyWithoutLogsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogUncheckedUpdateWithoutAuthorInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogUpdateInput = {
  author?: Maybe<AdminUpdateOneWithoutLogsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogUpdateManyWithWhereWithoutAuthorInput = {
  data: LogUncheckedUpdateManyWithoutLogsInput;
  where: LogScalarWhereInput;
};

export type LogUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LogCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<LogCreateWithoutAuthorInput>>>;
  delete?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<LogScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<LogWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<LogUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<LogUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<LogUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type LogUpdateWithWhereUniqueWithoutAuthorInput = {
  data: LogUncheckedUpdateWithoutAuthorInput;
  where: LogWhereUniqueInput;
};

export type LogUpdateWithoutAuthorInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogUpsertWithWhereUniqueWithoutAuthorInput = {
  create: LogUncheckedCreateWithoutAuthorInput;
  update: LogUncheckedUpdateWithoutAuthorInput;
  where: LogWhereUniqueInput;
};

export type LogWhereInput = {
  AND?: Maybe<Array<Maybe<LogWhereInput>>>;
  NOT?: Maybe<Array<Maybe<LogWhereInput>>>;
  OR?: Maybe<Array<Maybe<LogWhereInput>>>;
  author?: Maybe<AdminWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type LogWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneAdmin: Admin;
  createOneComment: Comment;
  createOneGroup: Group;
  createOneLog: Log;
  createOnePost: Post;
  createOneUser: User;
  deleteManyAdmin: BatchPayload;
  deleteManyComment: BatchPayload;
  deleteManyGroup: BatchPayload;
  deleteManyLog: BatchPayload;
  deleteManyPost: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneAdmin?: Maybe<Admin>;
  deleteOneComment?: Maybe<Comment>;
  deleteOneGroup?: Maybe<Group>;
  deleteOneLog?: Maybe<Log>;
  deleteOnePost?: Maybe<Post>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<User>;
  updateField: Field;
  updateManyAdmin: BatchPayload;
  updateManyComment: BatchPayload;
  updateManyGroup: BatchPayload;
  updateManyLog: BatchPayload;
  updateManyPost: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneAdmin: Admin;
  updateOneComment: Comment;
  updateOneGroup: Group;
  updateOneLog: Log;
  updateOnePost: Post;
  updateOneUser: User;
  updatePassword?: Maybe<Scalars['Boolean']>;
  upsertOneAdmin: Admin;
  upsertOneComment: Comment;
  upsertOneGroup: Group;
  upsertOneLog: Log;
  upsertOnePost: Post;
  upsertOneUser: User;
};


export type MutationCreateOneAdminArgs = {
  data: AdminCreateInput;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateOneLogArgs = {
  data: LogCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyAdminArgs = {
  where?: Maybe<AdminWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationDeleteManyGroupArgs = {
  where?: Maybe<GroupWhereInput>;
};


export type MutationDeleteManyLogArgs = {
  where?: Maybe<LogWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteOneLogArgs = {
  where: LogWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyAdminArgs = {
  data: AdminUpdateManyMutationInput;
  where?: Maybe<AdminWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyGroupArgs = {
  data: GroupUpdateManyMutationInput;
  where?: Maybe<GroupWhereInput>;
};


export type MutationUpdateManyLogArgs = {
  data: LogUpdateManyMutationInput;
  where?: Maybe<LogWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneAdminArgs = {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateOneLogArgs = {
  data: LogUpdateInput;
  where: LogWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpsertOneAdminArgs = {
  create: AdminCreateInput;
  update: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneGroupArgs = {
  create: GroupCreateInput;
  update: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpsertOneLogArgs = {
  create: LogCreateInput;
  update: LogUpdateInput;
  where: LogWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntNullableFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type PostCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type PostAvgAggregateOutputType = {
  __typename?: 'PostAvgAggregateOutputType';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PostCountAggregateOutputType = {
  __typename?: 'PostCountAggregateOutputType';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PostCreateInput = {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<PostUncheckedCreateWithoutCommentsInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostUncheckedCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  create: PostUncheckedCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateWithoutCommentsInput = {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostMaxAggregateOutputType = {
  __typename?: 'PostMaxAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostMinAggregateOutputType = {
  __typename?: 'PostMinAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostOrderByInput = {
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  authorId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<PostScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<PostScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<PostScalarWhereWithAggregatesInput>>>;
  authorId?: Maybe<IntNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  published?: Maybe<BoolWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type PostSumAggregateOutputType = {
  __typename?: 'PostSumAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type PostUncheckedCreateInput = {
  authorId?: Maybe<Scalars['Int']>;
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
};

export type PostUncheckedCreateWithoutAuthorInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUncheckedCreateWithoutCommentsInput = {
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUncheckedUpdateInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUncheckedUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateManyInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  delete?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PostUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<PostUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<PostUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type PostUncheckedUpdateManyWithoutPostsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateWithoutAuthorInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateWithoutCommentsInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUncheckedUpdateManyWithoutPostsInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  delete?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PostUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<PostUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<PostUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<PostUncheckedCreateWithoutCommentsInput>;
  update?: Maybe<PostUncheckedUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUncheckedUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostUncheckedCreateWithoutAuthorInput;
  update: PostUncheckedUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostUncheckedCreateWithoutCommentsInput;
  update: PostUncheckedUpdateWithoutCommentsInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<Maybe<PostWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PostWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostWhereInput>>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAdmin?: Maybe<AggregateAdmin>;
  aggregateComment?: Maybe<AggregateComment>;
  aggregateGroup?: Maybe<AggregateGroup>;
  aggregateLog?: Maybe<AggregateLog>;
  aggregatePost?: Maybe<AggregatePost>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstAdmin?: Maybe<Admin>;
  findFirstComment?: Maybe<Comment>;
  findFirstGroup?: Maybe<Group>;
  findFirstLog?: Maybe<Log>;
  findFirstPost?: Maybe<Post>;
  findFirstUser?: Maybe<User>;
  findManyAdmin: Array<Admin>;
  findManyAdminCount: Scalars['Int'];
  findManyComment: Array<Comment>;
  findManyCommentCount: Scalars['Int'];
  findManyGroup: Array<Group>;
  findManyGroupCount: Scalars['Int'];
  findManyLog: Array<Log>;
  findManyLogCount: Scalars['Int'];
  findManyPost: Array<Post>;
  findManyPostCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueAdmin?: Maybe<Admin>;
  findUniqueComment?: Maybe<Comment>;
  findUniqueGroup?: Maybe<Group>;
  findUniqueLog?: Maybe<Log>;
  findUniquePost?: Maybe<Post>;
  findUniqueUser?: Maybe<User>;
  getSchema: Schema;
  me?: Maybe<User>;
};


export type QueryAggregateAdminArgs = {
  cursor?: Maybe<AdminWhereUniqueInput>;
  distinct?: Maybe<AdminScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<AdminOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AdminWhereInput>;
};


export type QueryAggregateCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryAggregateGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryAggregateLogArgs = {
  cursor?: Maybe<LogWhereUniqueInput>;
  distinct?: Maybe<LogScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<LogOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LogWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstAdminArgs = {
  cursor?: Maybe<AdminWhereUniqueInput>;
  distinct?: Maybe<AdminScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<AdminOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AdminWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindFirstGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindFirstLogArgs = {
  cursor?: Maybe<LogWhereUniqueInput>;
  distinct?: Maybe<LogScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<LogOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LogWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyAdminArgs = {
  cursor?: Maybe<AdminWhereUniqueInput>;
  distinct?: Maybe<AdminScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<AdminOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AdminWhereInput>;
};


export type QueryFindManyAdminCountArgs = {
  cursor?: Maybe<AdminWhereUniqueInput>;
  distinct?: Maybe<AdminScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<AdminOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AdminWhereInput>;
};


export type QueryFindManyCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyCommentCountArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyGroupCountArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyLogArgs = {
  cursor?: Maybe<LogWhereUniqueInput>;
  distinct?: Maybe<LogScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<LogOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LogWhereInput>;
};


export type QueryFindManyLogCountArgs = {
  cursor?: Maybe<LogWhereUniqueInput>;
  distinct?: Maybe<LogScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<LogOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LogWhereInput>;
};


export type QueryFindManyPostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyPostCountArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindUniqueGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryFindUniqueLogArgs = {
  where: LogWhereUniqueInput;
};


export type QueryFindUniquePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntNullableFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<UpdateFieldInput>>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts: Array<Post>;
};


export type UserCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type UserPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  groupId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
};

export type UserCreateInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateNestedOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateNestedManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutGroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserUncheckedCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  create?: Maybe<UserUncheckedCreateWithoutPostsInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserUncheckedCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGroupInput = {
  create: UserUncheckedCreateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserUncheckedCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateNestedOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutGroupInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutPostsInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateNestedOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  GroupId = 'groupId',
  Id = 'id',
  Name = 'name',
  Password = 'password'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  groupId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  groupId?: Maybe<IntNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
};

export type UserUncheckedCreateNestedManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutGroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
};

export type UserUncheckedCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
};

export type UserUncheckedCreateWithoutGroupInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
};

export type UserUncheckedCreateWithoutPostsInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserUncheckedUpdateInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  groupId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutAuthorInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  groupId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutGroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  delete?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<UserUpdateWithWhereUniqueWithoutGroupInput>>>;
  updateMany?: Maybe<Array<Maybe<UserUpdateManyWithWhereWithoutGroupInput>>>;
  upsert?: Maybe<Array<Maybe<UserUpsertWithWhereUniqueWithoutGroupInput>>>;
};

export type UserUncheckedUpdateManyWithoutUsersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  groupId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutAuthorInput>;
};

export type UserUncheckedUpdateWithoutGroupInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutAuthorInput>;
};

export type UserUncheckedUpdateWithoutPostsInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  groupId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutGroupInput = {
  data: UserUncheckedUpdateManyWithoutUsersInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutGroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  delete?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<UserUpdateWithWhereUniqueWithoutGroupInput>>>;
  updateMany?: Maybe<Array<Maybe<UserUpdateManyWithWhereWithoutGroupInput>>>;
  upsert?: Maybe<Array<Maybe<UserUpsertWithWhereUniqueWithoutGroupInput>>>;
};

export type UserUpdateOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserUncheckedCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  create?: Maybe<UserUncheckedCreateWithoutPostsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithWhereUniqueWithoutGroupInput = {
  data: UserUncheckedUpdateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutGroupInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutPostsInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutGroupInput = {
  create: UserUncheckedCreateWithoutGroupInput;
  update: UserUncheckedUpdateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserUncheckedCreateWithoutCommentsInput;
  update: UserUncheckedUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserUncheckedCreateWithoutPostsInput;
  update: UserUncheckedUpdateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  group?: Maybe<GroupWhereInput>;
  groupId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);


export const MeDocument = gql`
    query me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;