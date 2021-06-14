import { objectType } from 'nexus'

export const Admin = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Admin',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('email')
    t.nullable.string('name')
    t.string('password')
    t.list.field('logs', {
      type: 'Log',
      args: {
        where: 'LogWhereInput',
        orderBy: 'LogOrderByInput',
        cursor: 'LogWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'LogScalarFieldEnum',
      },
      resolve(root: any) {
        return root.logs
      },
    })
  },
})
