import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import createUserMake from "../make/CreateUserMake";

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
    //return result;
  } catch (err) {
    return reply.code(400).send({ message: "Error in the request body" });
  }
}
