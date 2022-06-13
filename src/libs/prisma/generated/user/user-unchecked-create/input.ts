import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutUserInput } from '../../post/post-unchecked-create-nested-many-without-user/input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutUserInput;
}
