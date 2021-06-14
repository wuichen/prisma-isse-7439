import { queryField, nonNull, list } from 'nexus'

export const GroupFindCountQuery = queryField('findManyGroupCount', {
  type: nonNull('Int'),
  args: {
    where: 'GroupWhereInput',
    orderBy: list('GroupOrderByInput'),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1 }) {
    return prisma1.group.count(args as any)
  },
})
