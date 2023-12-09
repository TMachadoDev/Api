import { prisma } from "../database/prisma";
import { App, AppRepository } from "../interfaces/app.interface";

class AppRepositoryService implements AppRepository {
  findById(id: string): Promise<App | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<App | null> {
    throw new Error("Method not implemented.");
  }
  stop(id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  start(id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async create(app: App): Promise<App | null> {
    const result = await prisma.app.create({
      data: {
        id: app.id,
        ownerId: app.ownerId,
        name: app.name,
        logo: app.logo,
        token: app.token,
        featuresCount: app.featuresCount,
        ram: app.ram,
      },
    });

    return result;
  }
}

export { AppRepositoryService };
