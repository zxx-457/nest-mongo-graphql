import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatInput } from './dto/cat.input';
import { CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<CatDocument>) {}

  hello() {
    return 'hello';
  }

  async createCat(input: CatInput): Promise<CatDocument> {
    const newCat = new this.catModel(input);
    return await newCat.save();
  }

  async findAll(): Promise<CatDocument[]> {
    return this.catModel.find().exec();
  }
}
