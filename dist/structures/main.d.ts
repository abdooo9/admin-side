import { FormOptions } from "../types/FormOptios";
import { FieldOptions } from "../types/FieldOptions";
import { PageOptions } from "../types/PageOptios";
import { RequestOptions } from "../types/RequestOptions";
import { SubmitButtonOptions } from "../types/SubmitButtonOptions";
import { RenderOptions } from "../types/RenderOptions";
import { Color } from "../types/Colors";
import { Items } from "../types/PageItems";
declare class Page implements PageOptions {
    title: string;
    description: string;
    backgroundColor: Color;
    items: Array<any>;
    /**
     * Craete a page
     * @name Page
     * @param {PageOptions|Object} [data={}] - The data to create the form with.
     * @example
     * const form = new <Admin>.Page();
    */
    constructor(data?: PageOptions);
    setup(data: PageOptions): void;
    /**
     * Set the title of the page.
     * @param {string} title - The title to set.
     * @example
     * const page = new <Admin>.Page();
     * page.setTitle("This is a title.");
     * @returns {Page} The page.
     */
    setTitle(title: string): this;
    /**
     * Set the description of the page.
     * @param {string} description - The description to set.
     * @example
     * const page = new <Admin>.Page();
     * page.setDescription("This is a description.");
     * @returns {Page} The page.
     */
    setDescription(description: string): this;
    /**
     * Set the background color of the page.
     * @param {Color} color - The color to set.
     * @example
     * const page = new <Admin>.Page();
     * page.setBackgroundColor("#fff000");
     * @returns {Page} The page.
     */
    setBackgroundColor(color: Color): this;
    /**
     * Add item to the page.
     * @param {Items} item - The item to add.
     * @example
     * const page = new <Admin>.Page();
     * page.addItem(new <Admin>.Form());
     * @returns {Page} The page.
     */
    addItem(item: Items): this;
    /**
     * Render the page.
     * @param {RenderOptions} [options={}] - The options to render the page with.
     * @example
     * const page = new <Admin>.Page();
     * page.render();
     */
    render(data: RenderOptions): {
        html: Promise<string>;
    };
}
declare class Form implements FormOptions {
    fields: Array<FieldOptions>;
    request: RequestOptions;
    submitButton: SubmitButtonOptions;
    title: string;
    icon: string;
    /**
     * Craete a form.
     * @name Form
     * @param {FormOptions|Object} [data={}] - The data to construct the Form with.
     * @example
     * const form = new <Admin>.Form();
    */
    constructor(data?: FormOptions);
    setup(data: FormOptions): void;
    /**
     * Add field to the form.
     * @param {FieldOptions} field - The field to add.
     * @example
     * const form = new <Admin>.Form();
     * form.addField({ id: 'name', label: 'Enter here your name' });
    */
    addField(field: FieldOptions): this;
    /**
     * Set the title of the form.
     * @param {string} title - The title of the form.
     * @example
     * const form = new <Admin>.Form();
     * form.setTitle('This is a title');
     * @returns {Form} The form.
    */
    setTitle(title: string): this;
    /**
     * Set the icon of the form.
     * @param {string} icon - The [fontawesome](https://fontawesome.com/start) icon to display on the title of the form.
     * @example
     * const form = new <Admin>.Form();
     * form.setIcon('fa-solid fa-right-to-bracket');
     * @returns {Form} The form.
     */
    setIcon(icon: string): this;
    /**
     * Set the request of the form.
     * @param {RequestOptions} data - The request path and method of the form.
     * @example
     * const form = new <Admin>.Form();
     * form.setRequest({ path: '/api', method: 'POST' });
     * @returns {Form} The form.
    */
    setRequest(data: RequestOptions): this;
    /**
     * Set the submit button of the form.
     * @param {SubmitButtonOptions} data - The submit button of the form.
     * @example
     * const form = new <Admin>.Form();
     * form.setSubmitButton({ label: 'Submit', color: 'primary', disabled: false });
     * @returns {Form} The form.
     */
    setSubmitButton(data: SubmitButtonOptions): this;
    /**
     * Render the form.
     * @param {Object} [data={}] - The data to render the form with.
     * @example
     * const form = new <Admin>.Form();
     * form.render();
     * @returns {html} The rendered form.
     */
    render(data: RenderOptions): Promise<{
        html: Promise<string>;
    }>;
}
export { Page, Form };
