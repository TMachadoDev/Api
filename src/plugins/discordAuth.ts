import { FastifyPluginAsync } from "fastify";
import oauthPlugin, { OAuth2Namespace, fastifyOauth2 } from "@fastify/oauth2";
import urljoin from "url-join";
import fp from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    discordAuth: OAuth2Namespace;
  }
}

const plugin: FastifyPluginAsync = async (instance) => {
  instance.log.info({ msg: `Setting up Discord OAuth` });

  const client = {
    id: process.env.DISCORD_ID as string,
    secret: process.env.DISCORD_SECRET as string,
  };

  const startRedirectPath = "/auth/login/discord";
  const callbackUri = urljoin(
    process.env.SERVER_URL as string,
    startRedirectPath,
    "callback"
  );

  instance.register(oauthPlugin, {
    name: "discordAuth",
    scope: ["identify"],
    credentials: {
      client,
      auth: fastifyOauth2.DISCORD_CONFIGURATION,
    },
    startRedirectPath,
    callbackUri,
  });
};

export const DiscordOauth = fp(plugin);
