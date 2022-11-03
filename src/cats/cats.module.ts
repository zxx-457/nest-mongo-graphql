import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';

@Module({
  providers: [CatsResolver, CatsService],
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
})
export class CatsModule {}
