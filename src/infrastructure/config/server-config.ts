import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as cors from 'cors'
import { ConfigModule } from './config.module'
// import middleware from '../security/middleware'
import { useSwagger } from '../swagger'

export async function configapp() {
  const app = await NestFactory.create(ConfigModule, {
    bufferLogs: true,
    cors: true,
  })

  useSwagger(app)

  app.use(cors())
  app.useGlobalPipes(new ValidationPipe())
  // app.use(middleware)

  return app
}
