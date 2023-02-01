import { FieldOptions } from './FieldOptions';
import { RequestOptions } from './RequestOptions';
import { SubmitButtonOptions } from './SubmitButtonOptions';
export interface FormOptions {
    title: string;
    icon: string;
    fields: Array<FieldOptions>;
    request: RequestOptions;
    submitButton: SubmitButtonOptions;
}
