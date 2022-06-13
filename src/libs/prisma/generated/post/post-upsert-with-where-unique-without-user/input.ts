import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from '../post-where-unique/input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutUserInput } from '../post-update-without-user/input';
import { PostCreateWithoutUserInput } from '../post-create-without-user/input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutUserInput, {nullable:false})
    @Type(() => PostUpdateWithoutUserInput)
    update!: PostUpdateWithoutUserInput;

    @Field(() => PostCreateWithoutUserInput, {nullable:false})
    @Type(() => PostCreateWithoutUserInput)
    create!: PostCreateWithoutUserInput;
}
