import { mutationField, nonNull } from 'nexus'

export const AdminUpsertOneMutation = mutationField('upsertOneAdmin', {
  type: nonNull('Admin'),
  args: {
    where: nonNull('AdminWhereUniqueInput'),
    create: nonNull('AdminCreateInput'),
    update: nonNull('AdminUpdateInput'),
  },
  resolve(_parent, args, { prisma2, select }) {
    return prisma2.admin.upsert({
      ...args,
      ...select,
    })
  },
})
