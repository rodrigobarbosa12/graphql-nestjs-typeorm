import { Module } from '@nestjs/common'
import { AppResolver } from './app.resolver'
import { AppService } from 'src/applications/app/app.service'
import { userProviders } from 'src/infrastructure/database/typeorm/providers/user.providers'
import { DatabaseModule } from 'src/infrastructure/database/typeorm/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, AppResolver, AppService],
})
export class AppModule {}
