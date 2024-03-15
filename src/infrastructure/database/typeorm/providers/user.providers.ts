import { DataSource } from 'typeorm'
import { Users } from '../entity/Users'

export const userProviders = [
  {
    provide: 'USER_REPOSITORY-OF-EXEMPLE',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
]
