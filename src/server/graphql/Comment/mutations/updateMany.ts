import { mutationField, nonNull } from 'nexus'

export const CommentUpdateManyMutation = mutationField('updateManyComment', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CommentWhereInput',
    data: nonNull('CommentUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma1 }) {
    return prisma1.comment.updateMany(args as any)
  },
})
