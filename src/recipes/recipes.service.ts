import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './interfaces/recipe.interface';
import { CreateRecipeDto } from './dtos/create-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel('Recipe') private readonly recipeModel: Model<Recipe>,
  ) {}

  async create(createCatDto: CreateRecipeDto): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(createCatDto);
    return await createdRecipe.save();
  }

  async findAll(): Promise<Recipe[]> {
    return await this.recipeModel.find().exec();
  }
}
