import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export default class FindPostsArgs {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  content: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}
