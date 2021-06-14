import { mutationField, nonNull } from 'nexus'

export const LogUpdateManyMutation = mutationField('updateManyLog', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'LogWhereInput',
    data: nonNull('LogUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma2 }) {
    return prisma2.log.updateMany(args as any)
  },
})
