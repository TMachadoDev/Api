import { prisma } from "../database/prisma";
import { UserNotFoundException } from "../errors/user-not-found.error";

import {
  SearchUser,
  User,
  UserCreate,
  UserRepository,
} from "../interfaces/user.interface";

class UserRepositoryService implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    return user || null;
  }

  async verifyIfExists(data: SearchUser): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: data.email,
          },
          {
            id: data.id,
          },
        ],
      },
    });

    return user || null;
  }

  async create(data: UserCreate): Promise<User> {
    const result = await prisma.user.create({
      data: {
        id: data.id,
        avatar: data.avatar,
        name: data.name,
        email: data.email,
      },
    });

    return result;
  }

  async deleteUser(id: string): Promise<User | null> {
    const user = await prisma.user.delete({
      where: { id: id },
    });

    return user || null;
  }
}
export { UserRepositoryService };
