import { Controller, Body, Get, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dtos/create-recipe.dto';
import { Recipe } from './interfaces/recipe.interface';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }
}
