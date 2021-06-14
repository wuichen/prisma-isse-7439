import { queryField, nonNull, list } from 'nexus'

export const AdminFindCountQuery = queryField('findManyAdminCount', {
  type: nonNull('Int'),
  args: {
    where: 'AdminWhereInput',
    orderBy: list('AdminOrderByInput'),
    cursor: 'AdminWhereUniqueInput',
    distinct: 'AdminScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma2 }) {
    return prisma2.admin.count(args as any)
  },
})
