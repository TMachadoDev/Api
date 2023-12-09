class DuplicateUserException extends Error {
  statusCode: number;
  name: string;
  constructor(user: string) {
    super(`User ${user} already exists`);
    this.name = "DuplicateUserException";
    this.statusCode = 409;
  }
}

export { DuplicateUserException };
