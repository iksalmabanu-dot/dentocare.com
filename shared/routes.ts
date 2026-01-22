import { z } from 'zod';
import { insertContactMessageSchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
  }),
  serverError: z.object({
    message: z.string(),
  })
};

export const api = {
  contact: {
    create: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactMessageSchema,
      responses: {
        200: z.object({ success: z.boolean(), message: z.string() }),
        400: errorSchemas.validation,
        500: errorSchemas.serverError
      }
    }
  }
};
