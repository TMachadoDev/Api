import { FastifyInstance } from "fastify";
import { AppUseCase } from "../usecases/app.usecase";
import { AppCreate } from "../interfaces/app.interface";

export async function appRoutes(fastify: FastifyInstance) {
  const appUseCase = new AppUseCase();

  fastify.post<{ Body: AppCreate }>("/create", async (request, reply) => {
    const { id, ownerId, featuresCount, ram, token } = request.body;

    const result = await appUseCase.create({
      id,
      ownerId,
      featuresCount,
      ram,
      token,
    });
  });
}
