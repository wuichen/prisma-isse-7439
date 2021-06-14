import { queryField, list } from 'nexus'

export const UserFindFirstQuery = queryField('findFirstUser', {
  type: 'User',
  args: {
    where: 'UserWhereInput',
    orderBy: list('UserOrderByInput'),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.user.findFirst({
      ...args,
      ...select,
    })
  },
})
