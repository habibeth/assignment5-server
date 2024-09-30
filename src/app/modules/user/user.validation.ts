import { z } from "zod";

const createUserValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        phone: z.string(),
        address: z.string(),
        role: z.enum(['user', 'admin'] as [string, ...string[]]).optional(),
    })
})

const updateUserValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        password: z.string().min(6).optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        role: z.enum(['user', 'admin'] as [string, ...string[]]).optional(),
    })
})


export const UserValidation = {
    createUserValidationSchema,
    updateUserValidationSchema
}