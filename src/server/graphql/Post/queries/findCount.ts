import { queryField, nonNull, list } from 'nexus'

export const PostFindCountQuery = queryField('findManyPostCount', {
  type: nonNull('Int'),
  args: {
    where: 'PostWhereInput',
    orderBy: list('PostOrderByInput'),
    cursor: 'PostWhereUniqueInput',
    distinct: 'PostScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1 }) {
    return prisma1.post.count(args as any)
  },
})
