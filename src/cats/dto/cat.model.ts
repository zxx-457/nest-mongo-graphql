import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class CatObject {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => Int)
  age: number;
}
