import { queryField, list } from 'nexus'

export const AdminAggregateQuery = queryField('aggregateAdmin', {
  type: 'AggregateAdmin',
  args: {
    where: 'AdminWhereInput',
    orderBy: list('AdminOrderByInput'),
    cursor: 'AdminWhereUniqueInput',
    distinct: 'AdminScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma2, select }) {
    return prisma2.admin.aggregate({ ...args, ...select }) as any
  },
})
