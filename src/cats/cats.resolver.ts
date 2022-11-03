import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatObject } from './dto/cat.model';
import { CatInput } from './dto/cat.input';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Query((returns) => String)
  hello() {
    return this.catsService.hello();
  }

  @Query((returns) => [CatObject])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => CatObject)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.createCat(input);
  }
}
