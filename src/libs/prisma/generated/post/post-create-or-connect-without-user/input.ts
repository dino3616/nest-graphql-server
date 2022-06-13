import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from '../post-where-unique/input';
import { Type } from 'class-transformer';
import { PostCreateWithoutUserInput } from '../post-create-without-user/input';

@InputType()
export class PostCreateOrConnectWithoutUserInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutUserInput, {nullable:false})
    @Type(() => PostCreateWithoutUserInput)
    create!: PostCreateWithoutUserInput;
}
