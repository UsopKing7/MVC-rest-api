import z from 'zod';

export const validation = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  brand: z.string(),
  category: z.string(), 
  details: z.object({
    color: z.string().optional(),
    capacity: z.string().optional(),
    price: z.number().positive(),
    screen: z.string().optional(),
    operating_system: z.string().optional(),
    available: z.boolean().optional()
  })
})