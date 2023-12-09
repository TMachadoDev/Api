import { FastifyInstance, FastifyRequest } from "fastify";
import { UserCreate } from "../interfaces/user.interface";
import { UserUseCase } from "../usecases/user.usecase";
import { handleErrorResponse } from "../handlers/user.handlers";

export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();

  fastify.post<{ Body: UserCreate }>("/create", async (request, reply) => {
    const { id, name, email, avatar } = request.body;

    try {
      const result = await userUseCase.create({ id, name, email, avatar });

      reply
        .code(201)
        .send({ success: true, message: "User created successfully" });
    } catch (error) {
      handleErrorResponse(error, reply);
    }
  });

  fastify.get("/:id", async (request: FastifyRequest, reply) => {
    //@ts-ignore
    const userId: string = request.params.id;

    try {
      const user = await userUseCase.findById(userId);

      reply.code(200).send({ success: true, user: user });
    } catch (error) {
      handleErrorResponse(error, reply);
    }

    return reply.send({
      message: "User information retrieved successfully",
    });
  });

  fastify.delete("/:id", async (request, reply) => {
    //@ts-ignore
    const userId: string = request.params.id;

    try {
      await userUseCase.deleteUser(userId);
      reply.code(200).send({
        success: true,
        message: `User id: ${userId} was deleted`,
      });
    } catch (error) {
      handleErrorResponse(error, reply);
    }
  });
}
