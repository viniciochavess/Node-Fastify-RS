import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import createUserMake from "../../make/CreateUserMake";
import { UserAlreadyExistsError } from "../../errors/users-already-exists-error";

export async function RegisterUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const ShemaBody = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  });

  try {
    const { name, email, password } = ShemaBody.parse(request.body);
    const make = createUserMake;
    const result = await make.execute({ name, email, password });
    console.log(result);
    return result;
  } catch (err) {
    if(err instanceof UserAlreadyExistsError){ 
      reply.code(409).send({ err: err.message });
    }
    return reply.code(500).send({ err});
  }
}
