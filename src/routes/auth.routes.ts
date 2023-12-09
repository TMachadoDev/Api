import { FastifyInstance } from "fastify";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.get("/login/discord/callback", async (request, reply) => {
    const { token } =
      await fastify.discordAuth.getAccessTokenFromAuthorizationCodeFlow(
        request
      );

    console.log("Token!", token);
    // Do something with token (get user info, save to db etc)
  });
}
