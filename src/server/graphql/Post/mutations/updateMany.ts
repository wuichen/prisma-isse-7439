import { mutationField, nonNull } from 'nexus'

export const PostUpdateManyMutation = mutationField('updateManyPost', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'PostWhereInput',
    data: nonNull('PostUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma1 }) {
    return prisma1.post.updateMany(args as any)
  },
})
