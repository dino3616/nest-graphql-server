import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from '../post-where-unique/input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutUserInput } from '../post-update-without-user/input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutUserInput, {nullable:false})
    @Type(() => PostUpdateWithoutUserInput)
    data!: PostUpdateWithoutUserInput;
}
