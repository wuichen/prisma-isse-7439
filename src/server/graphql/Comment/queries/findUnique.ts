import { queryField, nonNull } from 'nexus'

export const CommentFindUniqueQuery = queryField('findUniqueComment', {
  type: 'Comment',
  args: {
    where: nonNull('CommentWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma1, select }) {
    return prisma1.comment.findUnique({
      where,
      ...select,
    })
  },
})
