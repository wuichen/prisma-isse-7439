import { mutationField, nonNull } from 'nexus'

export const CommentUpdateOneMutation = mutationField('updateOneComment', {
  type: nonNull('Comment'),
  args: {
    where: nonNull('CommentWhereUniqueInput'),
    data: nonNull('CommentUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma1, select }) {
    return prisma1.comment.update({
      where,
      data,
      ...select,
    })
  },
})
