import fastify from 'fastify';
import { appRouterUser } from './router/UserRouter';
const app  = fastify();

app.register(appRouterUser)

export default app;