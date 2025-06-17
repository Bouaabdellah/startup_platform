'use server';

import { auth } from '@/auth';
import { FormValues } from '@/types/interfaces';
import { parseServerActions } from './utils';
import slugify from 'slugify';
import { writeClient } from '@/sanity/lib/writeClient';

export const createStartup = async (state: any, formValues: FormValues) => {
  const session = await auth();
  if (!session) {
    return parseServerActions({
      status: 'Error',
      error: 'Not Signed In',
    });
  }

  const slug = slugify(formValues.title, { strict: true, lower: true });
  const startup = {
    ...formValues,
    views : 0,
    slug: {
      _type: 'slug',
      current: slug,
    },
    author: {
      _type: 'reference',
      _ref: session.id,
    },
  };
  try {
    const result = await writeClient.create({
      _type: 'startup',
      ...startup,
    });

    return parseServerActions({
        ...result,
        status : 'Success',
        error : ''
    });
  } catch (error) {
    return parseServerActions({
      error: JSON.stringify(error),
      status: 'Error',
    });
  }
};
