import { mutationField, nonNull } from 'nexus'

export const UserUpdateOneMutation = mutationField('updateOneUser', {
  type: nonNull('User'),
  args: {
    where: nonNull('UserWhereUniqueInput'),
    data: nonNull('UserUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma1, select }) {
    return prisma1.user.update({
      where,
      data,
      ...select,
    })
  },
})
