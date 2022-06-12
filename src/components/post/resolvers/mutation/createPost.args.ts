import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export default class CreatePostArgs {
  @Field()
  title: string;

  @Field()
  content: string;
}
