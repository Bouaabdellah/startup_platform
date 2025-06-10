import { defineQuery } from 'next-sanity';

export const getStartup = defineQuery(`
    *[_type == 'startup' && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
    _id, name, image, bio
    },
    category,
    image,
    description,
    views
    }
    `);
