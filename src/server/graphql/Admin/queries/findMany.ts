import { queryField, nonNull, list } from 'nexus'

export const AdminFindManyQuery = queryField('findManyAdmin', {
  type: nonNull(list(nonNull('Admin'))),
  args: {
    where: 'AdminWhereInput',
    orderBy: list('AdminOrderByInput'),
    cursor: 'AdminWhereUniqueInput',
    distinct: 'AdminScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma2, select }) {
    return prisma2.admin.findMany({
      ...args,
      ...select,
    })
  },
})
