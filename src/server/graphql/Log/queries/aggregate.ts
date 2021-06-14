import { queryField, list } from 'nexus'

export const LogAggregateQuery = queryField('aggregateLog', {
  type: 'AggregateLog',
  args: {
    where: 'LogWhereInput',
    orderBy: list('LogOrderByInput'),
    cursor: 'LogWhereUniqueInput',
    distinct: 'LogScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma2, select }) {
    return prisma2.log.aggregate({ ...args, ...select }) as any
  },
})
