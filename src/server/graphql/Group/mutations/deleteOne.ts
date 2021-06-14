import { mutationField, nonNull } from 'nexus'

export const GroupDeleteOneMutation = mutationField('deleteOneGroup', {
  type: 'Group',
  args: {
    where: nonNull('GroupWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma1, select }) => {
    await prisma1.onDelete({ model: 'Group', where })
    return prisma1.group.delete({
      where,
      ...select,
    })
  },
})
