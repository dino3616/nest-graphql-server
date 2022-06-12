import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export default class CreatePostArgs {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  content: string;
}
