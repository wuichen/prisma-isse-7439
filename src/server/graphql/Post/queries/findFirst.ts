import { queryField, list } from 'nexus'

export const PostFindFirstQuery = queryField('findFirstPost', {
  type: 'Post',
  args: {
    where: 'PostWhereInput',
    orderBy: list('PostOrderByInput'),
    cursor: 'PostWhereUniqueInput',
    distinct: 'PostScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.post.findFirst({
      ...args,
      ...select,
    })
  },
})
