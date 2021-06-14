import { mutationField, nonNull } from 'nexus'

export const AdminDeleteOneMutation = mutationField('deleteOneAdmin', {
  type: 'Admin',
  args: {
    where: nonNull('AdminWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma2, select }) => {
    await prisma2.onDelete({ model: 'Admin', where })
    return prisma2.admin.delete({
      where,
      ...select,
    })
  },
})
