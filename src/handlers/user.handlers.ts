import { FastifyReply } from "fastify";
import { DuplicateUserException } from "../errors/duplicate-user.error";
import { UserNotFoundException } from "../errors/user-not-found.error";

function handleErrorResponse(error: any, reply: FastifyReply): void {
  if (
    error instanceof DuplicateUserException ||
    error instanceof UserNotFoundException
  ) {
    reply.code(error.statusCode).send({
      statusCode: error.statusCode,
      error: error.name,
      message: error.message,
    });
  } else {
    reply.code(500).send({
      statusCode: 500,
      error: "Internal Server Error",
      message: "Something went wrong",
    });
  }
}

export { handleErrorResponse };
