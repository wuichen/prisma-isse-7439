import { mutationField, nonNull } from 'nexus'

export const PostDeleteManyMutation = mutationField('deleteManyPost', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'PostWhereInput',
  },
  resolve: async (_parent, { where }, { prisma1 }) => {
    await prisma1.onDelete({ model: 'Post', where })
    return prisma1.post.deleteMany({ where } as any)
  },
})
