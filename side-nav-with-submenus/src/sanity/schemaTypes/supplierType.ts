import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const supplierType = defineType({
  name: 'supplier',
  title: 'Supplier',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          {title: 'Energy Storage', value: 'energy-storage'},
          {title: 'Electric Vehicles', value: 'electric-vehicles'},
          {title: 'Solar Energy', value: 'solar-energy'},
          {title: 'Battery Technology', value: 'battery-technology'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'founded',
      title: 'Founded Year',
      type: 'number',
    }),
    defineField({
      name: 'headquarters',
      title: 'Headquarters',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Supplier',
      type: 'boolean',
      description: 'Mark this supplier as featured to highlight them',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      subtitle: 'industry',
    },
  },
})