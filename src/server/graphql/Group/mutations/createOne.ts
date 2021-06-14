import { mutationField, nonNull } from 'nexus'

export const GroupCreateOneMutation = mutationField('createOneGroup', {
  type: nonNull('Group'),
  args: {
    data: nonNull('GroupCreateInput'),
  },
  resolve(_parent, { data }, { prisma1, select }) {
    return prisma1.group.create({
      data,
      ...select,
    })
  },
})
