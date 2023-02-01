import { Color } from './Colors';
import { Items } from './Items';

export interface PageOptions {
    title: string;
    description: string;
    backgroundColor: Color;
    items: Array<Items>;
}