import { queryField, nonNull, list } from 'nexus'

export const UserFindCountQuery = queryField('findManyUserCount', {
  type: nonNull('Int'),
  args: {
    where: 'UserWhereInput',
    orderBy: list('UserOrderByInput'),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1 }) {
    return prisma1.user.count(args as any)
  },
})
