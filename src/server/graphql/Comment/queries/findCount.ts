import { queryField, nonNull, list } from 'nexus'

export const CommentFindCountQuery = queryField('findManyCommentCount', {
  type: nonNull('Int'),
  args: {
    where: 'CommentWhereInput',
    orderBy: list('CommentOrderByInput'),
    cursor: 'CommentWhereUniqueInput',
    distinct: 'CommentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1 }) {
    return prisma1.comment.count(args as any)
  },
})
