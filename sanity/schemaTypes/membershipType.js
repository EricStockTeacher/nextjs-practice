import {defineField, defineType} from 'sanity'

export const membershipType = defineType({
  name: 'membershipItem',
  title: 'Membership Item',
  type: 'document',
  fields: [
    {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
    }
    ],
})


