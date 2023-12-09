import fastify from "fastify";
import { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";
import { DiscordOauth } from "./plugins/discordAuth";
import { authRoutes } from "./routes/auth.routes";

const app: FastifyInstance = fastify({ logger: true });

app.register(DiscordOauth);

app.register(userRoutes, {
  prefix: "/user",
});

app.register(authRoutes, {
  prefix: "/auth",
});

app.listen(
  {
    port: 5000,
  },
  () => console.log("Server Running Sucessfully")
);
