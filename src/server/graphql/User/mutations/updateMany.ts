import { mutationField, nonNull } from 'nexus'

export const UserUpdateManyMutation = mutationField('updateManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserWhereInput',
    data: nonNull('UserUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma1 }) {
    return prisma1.user.updateMany(args as any)
  },
})
