/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ThuongWhereInput } from "./ThuongWhereInput";
import { Type } from "class-transformer";
import { ThuongOrderByInput } from "./ThuongOrderByInput";

@ArgsType()
class ThuongFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ThuongWhereInput,
  })
  @Field(() => ThuongWhereInput, { nullable: true })
  @Type(() => ThuongWhereInput)
  where?: ThuongWhereInput;

  @ApiProperty({
    required: false,
    type: [ThuongOrderByInput],
  })
  @Field(() => [ThuongOrderByInput], { nullable: true })
  @Type(() => ThuongOrderByInput)
  orderBy?: Array<ThuongOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ThuongFindManyArgs };