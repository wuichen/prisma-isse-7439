import { mutationField, nonNull } from 'nexus'

export const LogCreateOneMutation = mutationField('createOneLog', {
  type: nonNull('Log'),
  args: {
    data: nonNull('LogCreateInput'),
  },
  resolve(_parent, { data }, { prisma2, select }) {
    return prisma2.log.create({
      data,
      ...select,
    })
  },
})
