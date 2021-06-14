import { queryField, nonNull } from 'nexus'

export const UserFindUniqueQuery = queryField('findUniqueUser', {
  type: 'User',
  args: {
    where: nonNull('UserWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma1, select }) {
    return prisma1.user.findUnique({
      where,
      ...select,
    })
  },
})
