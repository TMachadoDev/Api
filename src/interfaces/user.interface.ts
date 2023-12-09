export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  plan: number;
  ram: number;
  createdAt: Date;
}

export interface UserCreate {
  name: string;
  avatar: string;
  email: string;
  id: string;
}

export interface SearchUser {
  id: string;
  email: string;
}

export interface UserRepository {
  create(user: UserCreate): Promise<User>;
  findById(id: string): Promise<User | null>;
  verifyIfExists(user: SearchUser): Promise<User | null>;
  deleteUser(id: string): Promise<User | null>;
}
