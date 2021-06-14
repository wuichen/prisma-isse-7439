import { queryField, list } from 'nexus'

export const CommentAggregateQuery = queryField('aggregateComment', {
  type: 'AggregateComment',
  args: {
    where: 'CommentWhereInput',
    orderBy: list('CommentOrderByInput'),
    cursor: 'CommentWhereUniqueInput',
    distinct: 'CommentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.comment.aggregate({ ...args, ...select }) as any
  },
})
