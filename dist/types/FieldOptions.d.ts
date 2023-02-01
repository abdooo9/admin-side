import { OptionOptions } from "./OptionOptions";
type type = "text" | "password" | "number" | "email" | "url" | "tel" | "color" | "date" | "time" | "datetime-local" | "month" | "week" | "textarea" | "select" | "checkbox" | "radio" | "file" | "submit" | "reset" | "button";
export interface FieldOptions {
    id: string;
    type: type;
    label: string;
    placeholder: string;
    value: string;
    required: boolean;
    options: Array<OptionOptions>;
}
export {};
