import { queryField, nonNull } from 'nexus'

export const PostFindUniqueQuery = queryField('findUniquePost', {
  type: 'Post',
  args: {
    where: nonNull('PostWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma1, select }) {
    return prisma1.post.findUnique({
      where,
      ...select,
    })
  },
})
