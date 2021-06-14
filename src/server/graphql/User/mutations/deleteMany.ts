import { mutationField, nonNull } from 'nexus'

export const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserWhereInput',
  },
  resolve: async (_parent, { where }, { prisma1 }) => {
    await prisma1.onDelete({ model: 'User', where })
    return prisma1.user.deleteMany({ where } as any)
  },
})
