import { queryField, list } from 'nexus'

export const PostAggregateQuery = queryField('aggregatePost', {
  type: 'AggregatePost',
  args: {
    where: 'PostWhereInput',
    orderBy: list('PostOrderByInput'),
    cursor: 'PostWhereUniqueInput',
    distinct: 'PostScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.post.aggregate({ ...args, ...select }) as any
  },
})
