/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ThuongWhereUniqueInput } from "./ThuongWhereUniqueInput";
import { ThuongUpdateInput } from "./ThuongUpdateInput";

@ArgsType()
class UpdateThuongArgs {
  @Field(() => ThuongWhereUniqueInput, { nullable: false })
  where!: ThuongWhereUniqueInput;
  @Field(() => ThuongUpdateInput, { nullable: false })
  data!: ThuongUpdateInput;
}

export { UpdateThuongArgs };
