import { z } from 'zod';

export const formSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must contain at least 3 characters')
    .max(20, 'Title must contain at most 20 characters'),
  description: z
    .string()
    .min(10, 'Description must contain at least 10 characters')
    .max(100, 'Description must contain at most 100 characters'),
  category: z
    .string()
    .min(3, 'Category must contain at least 3 characters')
    .max(20, 'Category must contain at most 20 characters'),
  image: z.string().refine(async (url) => {
    try {
      const response = await fetch(url, { method: 'HEADER' });
      const contentType = response.headers.get('content-type');
      return contentType?.startsWith('image/');
    } catch {
      return false;
    }
  }, 'Not Valid Image'),
  pitch: z.string().min(20, 'Pitch must be contain least 20 characters'),
});
