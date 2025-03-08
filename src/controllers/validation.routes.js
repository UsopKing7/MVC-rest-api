import z from 'zod';

export const validation = z.object({
  name: z.string(),
  brand: z.string(),
  category: z.string()
})