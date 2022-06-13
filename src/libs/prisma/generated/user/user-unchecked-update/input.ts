import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/string-field-update-operations/input';
import { PostUncheckedUpdateManyWithoutUserInput } from '../../post/post-unchecked-update-many-without-user/input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PostUncheckedUpdateManyWithoutUserInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutUserInput;
}
