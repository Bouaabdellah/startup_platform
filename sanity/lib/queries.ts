import { defineQuery } from 'next-sanity';

export const getStartup = defineQuery(`
    *[
    _type == 'startup' && defined(slug.current) 
    && (!defined($search) || title match $search || category match $search || author->name match $search)
    ] | order(_createdAt desc) {
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

export const getStartupDetails = defineQuery(`
    *[_type == 'startup' && _id == $id][0]{
    _id,
    title,
    slug,
    _createdAt,
    author -> {
    _id, name, username, image, bio
    },
    category,
    image,
    description,
    views,
    pitch
    }
    `);
