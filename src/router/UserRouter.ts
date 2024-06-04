import {FastifyInstance} from "fastify";
import { RegisterUserController } from "../http/RegisterUserController";

export async function appRouterUser(app: FastifyInstance) {
    app.post('/users', RegisterUserController )
}


