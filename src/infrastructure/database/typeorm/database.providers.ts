import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import * as path from 'path'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

const { HOST_DB, PORT_DB, USER_DB, PASSWORD_DB, DATABASE_DB } = process.env

const dataSource = new DataSource({
  type: 'mysql',
  host: HOST_DB,
  port: Number(PORT_DB),
  username: USER_DB,
  password: PASSWORD_DB,
  database: DATABASE_DB,
  logging: false,
  entities: [path.join(__dirname, 'entity/*.js')],
  migrations: [path.join(__dirname, 'migrations/*.js')],
  subscribers: [],
  namingStrategy: new SnakeNamingStrategy(),
})

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const typeormInit = await dataSource.initialize()

      return typeormInit
    },
  },
]

export default dataSource
