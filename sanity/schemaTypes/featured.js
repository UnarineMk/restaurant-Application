import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Menu categories Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurantMenu',
      title: 'restaurant Menus',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurantMenu'}]}],
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
  ],
})
