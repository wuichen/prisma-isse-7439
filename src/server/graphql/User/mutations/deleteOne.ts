import { mutationField, nonNull } from 'nexus'

export const UserDeleteOneMutation = mutationField('deleteOneUser', {
  type: 'User',
  args: {
    where: nonNull('UserWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma1, select }) => {
    await prisma1.onDelete({ model: 'User', where })
    return prisma1.user.delete({
      where,
      ...select,
    })
  },
})
