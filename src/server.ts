import fastify from "fastify";
import { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";
import { prototype } from "events";

const app: FastifyInstance = fastify({ logger: true });

app.register(userRoutes, {
  prefix: "/user",
});

app.listen(
  {
    port: 5000,
  },
  () => console.log("Server Running Sucessfully")
);
