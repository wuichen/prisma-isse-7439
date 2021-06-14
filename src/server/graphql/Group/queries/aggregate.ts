import { queryField, list } from 'nexus'

export const GroupAggregateQuery = queryField('aggregateGroup', {
  type: 'AggregateGroup',
  args: {
    where: 'GroupWhereInput',
    orderBy: list('GroupOrderByInput'),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.group.aggregate({ ...args, ...select }) as any
  },
})
