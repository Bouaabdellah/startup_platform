import { z } from 'zod';

export const formSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must contain at least 3 characters')
    .max(20, 'Title must contain at most 20 characters'),
  description: z
    .string()
    .min(10, 'Description must contain at least 10 characters')
    .max(150, 'Description must contain at most 150 characters'),
  category: z
    .string()
    .min(3, 'Category must contain at least 3 characters')
    .max(30, 'Category must contain at most 30 characters'),
  image: z.string().refine((url) => {
    const imageExtensions = /\.(jpg|jpeg|png)(\?.*)?$/i;
    return imageExtensions.test(url);
  }, 'Not Valid Image'),
  pitch: z.string().min(20, 'Pitch must be contain least 20 characters'),
});
