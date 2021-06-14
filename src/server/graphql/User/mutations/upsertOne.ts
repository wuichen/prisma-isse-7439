import { mutationField, nonNull } from 'nexus'

export const UserUpsertOneMutation = mutationField('upsertOneUser', {
  type: nonNull('User'),
  args: {
    where: nonNull('UserWhereUniqueInput'),
    create: nonNull('UserCreateInput'),
    update: nonNull('UserUpdateInput'),
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.user.upsert({
      ...args,
      ...select,
    })
  },
})
