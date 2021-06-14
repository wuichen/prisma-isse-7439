import { mutationField, nonNull } from 'nexus'

export const LogUpdateOneMutation = mutationField('updateOneLog', {
  type: nonNull('Log'),
  args: {
    where: nonNull('LogWhereUniqueInput'),
    data: nonNull('LogUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma2, select }) {
    return prisma2.log.update({
      where,
      data,
      ...select,
    })
  },
})
