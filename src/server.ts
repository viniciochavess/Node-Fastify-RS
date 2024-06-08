import fastify from 'fastify';
import { appRouterUser } from './router/UserRouter';
import { ZodError } from 'zod';
const app  = fastify();

app.register(appRouterUser)

app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError){
        reply.code(400).send({message: "Validation Error", issues: error.format() })
    }
})


export default app;