import { mutationField, nonNull } from 'nexus'

export const LogUpsertOneMutation = mutationField('upsertOneLog', {
  type: nonNull('Log'),
  args: {
    where: nonNull('LogWhereUniqueInput'),
    create: nonNull('LogCreateInput'),
    update: nonNull('LogUpdateInput'),
  },
  resolve(_parent, args, { prisma2, select }) {
    return prisma2.log.upsert({
      ...args,
      ...select,
    })
  },
})
