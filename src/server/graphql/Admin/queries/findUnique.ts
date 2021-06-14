import { queryField, nonNull } from 'nexus'

export const AdminFindUniqueQuery = queryField('findUniqueAdmin', {
  type: 'Admin',
  args: {
    where: nonNull('AdminWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma2, select }) {
    return prisma2.admin.findUnique({
      where,
      ...select,
    })
  },
})
