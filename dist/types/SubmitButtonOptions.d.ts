type BasicColors = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
type OutlineColors = "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-warning" | "outline-info" | "outline-light" | "outline-dark";
export interface SubmitButtonOptions {
    label: string;
    color: BasicColors | OutlineColors;
    disabled: boolean;
}
export {};
