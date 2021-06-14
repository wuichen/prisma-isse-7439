import { queryField, nonNull } from 'nexus'

export const GroupFindUniqueQuery = queryField('findUniqueGroup', {
  type: 'Group',
  args: {
    where: nonNull('GroupWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma1, select }) {
    return prisma1.group.findUnique({
      where,
      ...select,
    })
  },
})
