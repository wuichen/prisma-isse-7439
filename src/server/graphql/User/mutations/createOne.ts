import { mutationField, nonNull } from 'nexus'

export const UserCreateOneMutation = mutationField('createOneUser', {
  type: nonNull('User'),
  args: {
    data: nonNull('UserCreateInput'),
  },
  resolve(_parent, { data }, { prisma1, select }) {
    return prisma1.user.create({
      data,
      ...select,
    })
  },
})
