import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class PostModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;
}
