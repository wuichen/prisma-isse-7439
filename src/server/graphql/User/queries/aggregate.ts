import { queryField, list } from 'nexus'

export const UserAggregateQuery = queryField('aggregateUser', {
  type: 'AggregateUser',
  args: {
    where: 'UserWhereInput',
    orderBy: list('UserOrderByInput'),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.user.aggregate({ ...args, ...select }) as any
  },
})
