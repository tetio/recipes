import {Document} from 'mongoose'

export interface Recipe extends Document {
    readonly name: string;
    readonly ingredients: [string];
    readonly description: string;
}