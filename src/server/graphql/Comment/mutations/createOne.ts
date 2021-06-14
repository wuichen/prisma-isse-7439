import { mutationField, nonNull } from 'nexus'

export const CommentCreateOneMutation = mutationField('createOneComment', {
  type: nonNull('Comment'),
  args: {
    data: nonNull('CommentCreateInput'),
  },
  resolve(_parent, { data }, { prisma1, select }) {
    return prisma1.comment.create({
      data,
      ...select,
    })
  },
})
