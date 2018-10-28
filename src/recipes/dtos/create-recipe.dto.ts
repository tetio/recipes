
export class CreateRecipeDto {
    readonly name: string;
    readonly ingredients: [string];
    readonly description: string;
}