import { mutationField, nonNull } from 'nexus'

export const LogDeleteManyMutation = mutationField('deleteManyLog', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'LogWhereInput',
  },
  resolve: async (_parent, { where }, { prisma2 }) => {
    await prisma2.onDelete({ model: 'Log', where })
    return prisma2.log.deleteMany({ where } as any)
  },
})
