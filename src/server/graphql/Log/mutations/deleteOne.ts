import { mutationField, nonNull } from 'nexus'

export const LogDeleteOneMutation = mutationField('deleteOneLog', {
  type: 'Log',
  args: {
    where: nonNull('LogWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma2, select }) => {
    await prisma2.onDelete({ model: 'Log', where })
    return prisma2.log.delete({
      where,
      ...select,
    })
  },
})
