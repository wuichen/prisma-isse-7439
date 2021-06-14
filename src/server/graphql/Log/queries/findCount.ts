import { queryField, nonNull, list } from 'nexus'

export const LogFindCountQuery = queryField('findManyLogCount', {
  type: nonNull('Int'),
  args: {
    where: 'LogWhereInput',
    orderBy: list('LogOrderByInput'),
    cursor: 'LogWhereUniqueInput',
    distinct: 'LogScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma2 }) {
    return prisma2.log.count(args as any)
  },
})
