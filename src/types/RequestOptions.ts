type method = "get" | "post" | "dialog"
export interface RequestOptions {
    path: string;
    method: method;
}