import { mutationField, nonNull } from 'nexus'

export const AdminUpdateOneMutation = mutationField('updateOneAdmin', {
  type: nonNull('Admin'),
  args: {
    where: nonNull('AdminWhereUniqueInput'),
    data: nonNull('AdminUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma2, select }) {
    return prisma2.admin.update({
      where,
      data,
      ...select,
    })
  },
})
