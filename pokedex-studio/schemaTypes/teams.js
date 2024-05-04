import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 20,
            },
        }),
        defineField({
            name: 'teamImage',
            title: 'Team image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'pokemon',
            title: 'Pokemon',
            type: 'array',
            of: [{type: 'string'}],
        }),
    ]
})