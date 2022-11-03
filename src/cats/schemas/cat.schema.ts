import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = CatSchemaClass & Document;

@Schema()
export class CatSchemaClass {

  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const CatSchema = SchemaFactory.createForClass(CatSchemaClass);
