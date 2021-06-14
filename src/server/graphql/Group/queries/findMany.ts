import { queryField, nonNull, list } from 'nexus'

export const GroupFindManyQuery = queryField('findManyGroup', {
  type: nonNull(list(nonNull('Group'))),
  args: {
    where: 'GroupWhereInput',
    orderBy: list('GroupOrderByInput'),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.group.findMany({
      ...args,
      ...select,
    })
  },
})
