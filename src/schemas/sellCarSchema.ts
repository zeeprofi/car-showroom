
import * as z from 'zod';

// Define the form schema
export const sellCarFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  carMake: z.string().min(1, { message: 'Car make is required' }),
  carModel: z.string().min(1, { message: 'Car model is required' }),
  year: z.string().min(4, { message: 'Please enter a valid year' }),
  mileage: z.string().min(1, { message: 'Mileage is required' }),
  fuelType: z.string().min(1, { message: 'Fuel type is required' }),
  transmission: z.string().min(1, { message: 'Transmission type is required' }),
  condition: z.string().min(1, { message: 'Condition is required' }),
  expectedPrice: z.string().min(1, { message: 'Expected price is required' }),
  description: z.string().optional(),
  agreeToTerms: z.boolean().refine(value => value === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

export type SellCarFormValues = z.infer<typeof sellCarFormSchema>;
