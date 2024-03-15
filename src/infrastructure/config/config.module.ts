import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { AppModule } from 'src/interfaces/app/app.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: false,
      autoSchemaFile: join(
        process.cwd(),
        'src/infrastructure/services/graphql/schema.gql',
      ),
      sortSchema: true,
    }),
    AppModule,
  ],
})
export class ConfigModule {}
