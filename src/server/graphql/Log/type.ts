import { objectType } from 'nexus'

export const Log = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Log',
  definition(t) {
    t.int('id')
    t.string('title')
    t.nullable.field('author', {
      type: 'Admin',
      resolve(root: any) {
        return root.author
      },
    })
    t.nullable.int('authorId')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
