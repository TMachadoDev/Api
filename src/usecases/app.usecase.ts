import { App, AppCreate, AppRepository } from "../interfaces/app.interface";
import { AppRepositoryService } from "../repositories/app.repository";

class AppUseCase {
  private appRepository: AppRepository;
  constructor() {
    this.appRepository = new AppRepositoryService();
  }

  async create(data: AppCreate): Promise<App | null> {
    const result = await this.appRepository.create(data);

    return result;
  }
}

export { AppUseCase };
