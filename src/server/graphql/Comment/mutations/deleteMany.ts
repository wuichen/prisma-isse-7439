import { mutationField, nonNull } from 'nexus'

export const CommentDeleteManyMutation = mutationField('deleteManyComment', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CommentWhereInput',
  },
  resolve: async (_parent, { where }, { prisma1 }) => {
    await prisma1.onDelete({ model: 'Comment', where })
    return prisma1.comment.deleteMany({ where } as any)
  },
})
