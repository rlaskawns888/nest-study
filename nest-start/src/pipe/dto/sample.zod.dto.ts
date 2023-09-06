import { z } from 'zod';

export const sampleDtoSchema = z
  .object({
    name: z.string(),
    age: z.number(),
  })
  .required();

export type SampleDto = z.infer<typeof sampleDtoSchema>;