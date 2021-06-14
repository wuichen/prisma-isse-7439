import { mutationField, nonNull } from 'nexus'

export const AdminDeleteManyMutation = mutationField('deleteManyAdmin', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'AdminWhereInput',
  },
  resolve: async (_parent, { where }, { prisma2 }) => {
    await prisma2.onDelete({ model: 'Admin', where })
    return prisma2.admin.deleteMany({ where } as any)
  },
})
