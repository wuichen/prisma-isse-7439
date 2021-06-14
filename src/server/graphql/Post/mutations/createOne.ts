import { mutationField, nonNull } from 'nexus'

export const PostCreateOneMutation = mutationField('createOnePost', {
  type: nonNull('Post'),
  args: {
    data: nonNull('PostCreateInput'),
  },
  resolve(_parent, { data }, { prisma1, select }) {
    return prisma1.post.create({
      data,
      ...select,
    })
  },
})
