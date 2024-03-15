import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { User, UserPost } from 'src/infrastructure/services/graphql/models'
import { AppService } from 'src/applications/app/app.service'

@Resolver(() => User)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => User)
  getUser(@Args('id', { type: () => Int }) id: number) {
    return this.appService.findOneBy(id)
  }

  @Mutation(() => User)
  async postUser(@Args('user') user: UserPost) {
    return this.appService.create(user)
  }
}
