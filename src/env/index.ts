import  'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    NODE_ENV: z.enum(['dev', 'production']).default('dev'),
})

const env = envSchema.safeParse(process.env)

if (!env.success) {
    throw new Error(env.error.errors.join('\n'))
}

export default env.data