import { mutationField, nonNull } from 'nexus'

export const GroupUpdateManyMutation = mutationField('updateManyGroup', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'GroupWhereInput',
    data: nonNull('GroupUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma1 }) {
    return prisma1.group.updateMany(args as any)
  },
})
