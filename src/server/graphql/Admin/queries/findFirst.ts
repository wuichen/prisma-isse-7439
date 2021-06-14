import { queryField, list } from 'nexus'

export const AdminFindFirstQuery = queryField('findFirstAdmin', {
  type: 'Admin',
  args: {
    where: 'AdminWhereInput',
    orderBy: list('AdminOrderByInput'),
    cursor: 'AdminWhereUniqueInput',
    distinct: 'AdminScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma2, select }) {
    return prisma2.admin.findFirst({
      ...args,
      ...select,
    })
  },
})
