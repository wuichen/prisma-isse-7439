import { mutationField, nonNull } from 'nexus'

export const GroupUpsertOneMutation = mutationField('upsertOneGroup', {
  type: nonNull('Group'),
  args: {
    where: nonNull('GroupWhereUniqueInput'),
    create: nonNull('GroupCreateInput'),
    update: nonNull('GroupUpdateInput'),
  },
  resolve(_parent, args, { prisma1, select }) {
    return prisma1.group.upsert({
      ...args,
      ...select,
    })
  },
})
