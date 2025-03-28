import {z} from "zod";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6, {message: "Password must be at least 6 characters"})),
    newPassword: z.optional(z.string().min(6, {message: "Password must be at least 6 characters"})),
}).refine((data) => {
    if(data.password && !data.newPassword){
        return false
    }

    return true
}, {
    message: "Password and new password must be provided together",
    path: ["newPassword"]
}).refine((data) => {
    if(data.newPassword && !data.password){
        return false
    }

    return true
}, {
    message: "Password and new password must be provided together",
    path: ["newPassword"]
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {message: "Password is required"}),
    code: z.optional(z.string())
})
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
    name: z.string().min(1, {message: "Name is required"}),
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    })
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Password must be at least 6 characters"
    })
})