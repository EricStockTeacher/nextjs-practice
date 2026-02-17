import {defineField, defineType} from 'sanity'

export const newsItemType = defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'id',
      type: 'number',
    }),
    defineField({
      name: 'body',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
    })
  ],
})