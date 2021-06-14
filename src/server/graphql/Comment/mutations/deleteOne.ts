import { mutationField, nonNull } from 'nexus'

export const CommentDeleteOneMutation = mutationField('deleteOneComment', {
  type: 'Comment',
  args: {
    where: nonNull('CommentWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma1, select }) => {
    await prisma1.onDelete({ model: 'Comment', where })
    return prisma1.comment.delete({
      where,
      ...select,
    })
  },
})
