import { mutationField, nonNull } from 'nexus'

export const PostDeleteOneMutation = mutationField('deleteOnePost', {
  type: 'Post',
  args: {
    where: nonNull('PostWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma1, select }) => {
    await prisma1.onDelete({ model: 'Post', where })
    return prisma1.post.delete({
      where,
      ...select,
    })
  },
})
