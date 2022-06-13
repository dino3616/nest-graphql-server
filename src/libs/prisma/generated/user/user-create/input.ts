import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutUserInput } from '../../post/post-create-nested-many-without-user/input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PostCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutUserInput;
}
