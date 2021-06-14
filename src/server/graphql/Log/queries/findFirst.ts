import { queryField, list } from 'nexus'

export const LogFindFirstQuery = queryField('findFirstLog', {
  type: 'Log',
  args: {
    where: 'LogWhereInput',
    orderBy: list('LogOrderByInput'),
    cursor: 'LogWhereUniqueInput',
    distinct: 'LogScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma2, select }) {
    return prisma2.log.findFirst({
      ...args,
      ...select,
    })
  },
})
