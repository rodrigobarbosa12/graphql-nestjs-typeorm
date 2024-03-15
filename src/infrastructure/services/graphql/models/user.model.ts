import { Field, Int, ObjectType, InputType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => Int)
  id: number

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  password: string

  @Field({ nullable: true })
  phone: string

  @Field({ nullable: true })
  token: string

  @Field({ nullable: true })
  active: '0' | '1'

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date
}

@InputType()
export class UserPost {
  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  password: string

  @Field({ nullable: true })
  phone: string

  @Field({ nullable: true })
  token: string

  @Field({ nullable: true })
  active: '0' | '1'
}
