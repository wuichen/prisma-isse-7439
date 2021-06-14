import { mutationField, nonNull } from 'nexus'

export const AdminUpdateManyMutation = mutationField('updateManyAdmin', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'AdminWhereInput',
    data: nonNull('AdminUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma2 }) {
    return prisma2.admin.updateMany(args as any)
  },
})
