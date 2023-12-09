import { DuplicateUserException } from "../errors/duplicate-user.error";
import { UserNotFoundException } from "../errors/user-not-found.error";
import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryService } from "../repositories/user.repository";

class UserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepositoryService();
  }

  async create({ id, name, avatar, email }: UserCreate): Promise<User> {
    const verifyIfUserAlreadyExists = await this.userRepository.verifyIfExists({
      id,
      email,
    });

    if (verifyIfUserAlreadyExists) {
      throw new DuplicateUserException(verifyIfUserAlreadyExists.name);
    } else {
      const result = await this.userRepository.create({
        id,
        name,
        avatar,
        email,
      });

      return result;
    }
  }

  async findById(id: string): Promise<User | null> {
    const result = await this.userRepository.findById(id);

    if (!result) {
      throw new UserNotFoundException(id);
    }

    return result;
  }

  async deleteUser(id: string): Promise<User | null> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new UserNotFoundException(id);
    }

    await this.userRepository.deleteUser(id);

    return null;
  }
}

export { UserUseCase };
