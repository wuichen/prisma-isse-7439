import { mutationField, nonNull } from 'nexus'

export const GroupDeleteManyMutation = mutationField('deleteManyGroup', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'GroupWhereInput',
  },
  resolve: async (_parent, { where }, { prisma1 }) => {
    await prisma1.onDelete({ model: 'Group', where })
    return prisma1.group.deleteMany({ where } as any)
  },
})
