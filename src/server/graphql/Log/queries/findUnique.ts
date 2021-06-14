import { queryField, nonNull } from 'nexus'

export const LogFindUniqueQuery = queryField('findUniqueLog', {
  type: 'Log',
  args: {
    where: nonNull('LogWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma2, select }) {
    return prisma2.log.findUnique({
      where,
      ...select,
    })
  },
})
