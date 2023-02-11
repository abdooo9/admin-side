import { Color } from './Colors';
import { Items } from './PageItems';
export interface PageOptions {
    title: string;
    description: string;
    backgroundColor: Color;
    items: Array<Items>;
}
