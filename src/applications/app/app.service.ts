import { Injectable, Inject, Logger } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Users } from 'src/infrastructure/database/typeorm/entity/Users'
import { AppBodyCreate } from 'src/infrastructure/dtos/app-body'

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)

  constructor(
    @Inject('USER_REPOSITORY-OF-EXEMPLE')
    private userRepository: Repository<Users>,
  ) {}

  async findOneBy(id: number): Promise<Users> {
    return await this.userRepository.findOneBy({ id })
  }

  async create(data: AppBodyCreate): Promise<Users> {
    const result = await this.userRepository.save(data)

    const user = await this.findOneBy(result.id)

    return user
  }
}
