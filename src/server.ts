import fastify from 'fastify';
import { appRouterUser } from './router/UserRouter';
import { ZodError } from 'zod';
import { env } from 'process';
const app  = fastify();

app.register(appRouterUser)

app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError){
        reply.code(400).send({message: "Validation Error", issues: error.format() })
    }
   
    if(env.NODE_ENV !== 'production'){
        console.error(error)
    }

    return reply.code(500).send({message: "Internal Server Error"})
   
}


)



export default app;