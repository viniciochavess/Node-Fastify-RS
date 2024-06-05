import { FastifyInstance } from "fastify";
import { RegisterUserController } from "../http/controllers/RegisterUserController";

export async function appRouterUser(app: FastifyInstance) {
  await app.post("/users", RegisterUserController);
}
