import { queryField, nonNull, list } from 'nexus'

export const LogFindManyQuery = queryField('findManyLog', {
  type: nonNull(list(nonNull('Log'))),
  args: {
    where: 'LogWhereInput',
    orderBy: list('LogOrderByInput'),
    cursor: 'LogWhereUniqueInput',
    distinct: 'LogScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma2, select }) {
    return prisma2.log.findMany({
      ...args,
      ...select,
    })
  },
})
