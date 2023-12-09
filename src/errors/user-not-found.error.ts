class UserNotFoundException extends Error {
  statusCode: number;
  name: string;
  constructor(user: string) {
    super(`User id: ${user} was not found`);
    this.name = "UserNotFound";
    this.statusCode = 404;
  }
}

export { UserNotFoundException };
