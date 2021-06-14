import { mutationField, nonNull } from 'nexus'

export const AdminCreateOneMutation = mutationField('createOneAdmin', {
  type: nonNull('Admin'),
  args: {
    data: nonNull('AdminCreateInput'),
  },
  resolve(_parent, { data }, { prisma2, select }) {
    return prisma2.admin.create({
      data,
      ...select,
    })
  },
})
