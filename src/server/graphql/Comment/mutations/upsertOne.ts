import { mutationField, nonNull } from 'nexus'

export const CommentUpsertOneMutation = mutationField('upsertOneComment', {
  type: nonNull('Comment'),
  args: {
    where: nonNull('CommentWhereUniqueInput'),
    create: nonNull('CommentCreateInput'),
    update: nonNull('CommentUpdateInput'),
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.comment.upsert({
      ...args,
      ...select,
    })
  },
})
