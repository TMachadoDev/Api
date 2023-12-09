export interface App {
  id: string;
  logo: string;
  name: string;
  ownerId: string;
  ram: number;
  featuresCount: number;
  createdAt: Date;
  token: string;
}

export interface AppCreate {
  id: string;
  ownerId: string;
  ram: number;
  featuresCount: number;
  token: string;
}

export interface AppRepository {
  create(app: AppCreate): Promise<App | null>;
  findById(id: string): Promise<App | null>;
  delete(id: string): Promise<App | null>;
  stop(id: string): Promise<string>;
  start(id: string): Promise<string>;
}
