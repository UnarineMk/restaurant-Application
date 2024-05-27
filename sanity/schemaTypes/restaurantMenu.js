import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurantMenu',
  title: 'RestaurantMenu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Menu Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'lat',
      title: 'latitude of Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Menu image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'long',
      title: 'Longitude of Resturant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Resturant Address',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5 star)',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter value between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
