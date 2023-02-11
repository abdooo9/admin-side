"use strict";

import { FormOptions } from "../types/FormOptios";
import { FieldOptions } from "../types/FieldOptions";
import { PageOptions } from "../types/PageOptios";
import { RequestOptions } from "../types/RequestOptions";
import { SubmitButtonOptions } from "../types/SubmitButtonOptions";
import { RenderOptions } from "../types/RenderOptions";
import { Color } from "../types/Colors";
import { Items } from "../types/PageItems";
import * as ejs from "ejs";
import * as path from "path";

class Page implements PageOptions {
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
    constructor(data?: PageOptions) {
        this.setup(data);
    }

    setup(data: PageOptions) {

        /**
         * @name Page#title
         * @type {PageOptions}
         * @description The title of the page.
         * @example
         * const page = new <Admin>.Page({
         *  title: "This is a title."
         * });
         */
        this.title = data?.title || "Untitled";

        /**
         * @name Page#description
         * @type {PageOptions}
         * @description The description of the page.
         * @example
         * const page = new <Admin>.Page({
         *   description: "This is a description."
         * });
         */
        this.description = data?.description || null;

        /**
         * @name Page#backgroundColor
         * @type {PageOptions}
         * @description The background color of the page.
         * @example
         * const page = new <Admin>.Page({
         *     backgroundColor: "#fff000"
         * });
         */
        this.backgroundColor = data?.backgroundColor || null;

        /**
         * @name Page#items
         * @type {PageOptions}
         * @description The items of the page.
         * @example
         * const page = new <Admin>.Page({
         *    items: [new <Admin>.Form()]
         * });
         */
        this.items = data?.items || [];
    }

    /**
     * Add item to the page.
     * @param {Items} item - The item to add.
     * @example
     * const page = new <Admin>.Page();
     * page.addItem(new <Admin>.Form());
     * @returns {Page} The page.
     */
    addItem(item: Items) {
        this.items.push(item);
        return this;
    }

    /**
     * Render the page.
     * @param {RenderOptions} [options={}] - The options to render the page with.
     * @example
     * const page = new <Admin>.Page();
     * page.render();
     */
    render(data: RenderOptions) {
        const renderOptions = {
            lang: data.lang || "en",
            dir: data.dir || "ltr",
            styleInclude: data.styleInclude || true
        };

        return {
            html: ejs.renderFile(path.join(__dirname, "..", "views", "page.ejs"), {
                page: this,
                renderOptions
            })
        }
    }
}

class Form implements FormOptions {
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
    constructor(data?: FormOptions) {
        this.setup(data);
    }

    setup(data: FormOptions) {
        /**
         * @name Form#title
         * @type {FormOptions}
         * @description The title of the form.
         * @example
         * const form = new <Admin>.Form({ title: 'This is a title' });
         */
        this.title = data?.title || undefined;

        /**
         * @name Form#icon
         * @type {FormOptions}
         * @description The [fontawesome](https://fontawesome.com/start) icon to display on the title of the form.
         * @example
         * const form = new <Admin>.Form({ icon: 'fa-solid fa-right-to-bracket' });
         */
        this.icon = data?.icon || undefined;

        /**
         * @name Form#fields
         * @type {FormOptions}
         * @description The fields of the form.
         * @example
         * const form = new <Admin>.Form({ fields: [{ id: 'name', label: 'Enter here your name' }] });
        */
        this.fields = data?.fields || [];

        /**
         * @name Form#request
         * @type {FormOptions}
         * @description The request path and method of the form.
         * @example
         * const form = new <Admin>.Form({ request: { path: '/api', method: 'POST' } });
        */
        this.request = data?.request || { path: '/', method: 'get' };

        /**
         * @name Form#submitButton
         * @type {FormOptions}
         * @description The submit button of the form.
         * @example
         * const form = new <Admin>.Form({ submitButton: { label: 'Submit', color: 'primary', disabled: false } });
        */
        this.submitButton = data?.submitButton || undefined;
    }

    /**
     * Add field to the form.
     * @param {FieldOptions} field - The field to add.
     * @example
     * const form = new <Admin>.Form();
     * form.addField({ id: 'name', label: 'Enter here your name' });
    */
    addField(field: FieldOptions) {
        this.fields.push(field);
        return this;
    }

    /**
     * Set the title of the form.
     * @param {string} title - The title of the form.
     * @example
     * const form = new <Admin>.Form();
     * form.setTitle('This is a title');
     * @returns {Form} The form.
    */
    setTitle(title: string) {
        this.title = title;
        return this;
    }

    /**
     * Set the icon of the form.
     * @param {string} icon - The [fontawesome](https://fontawesome.com/start) icon to display on the title of the form.
     * @example
     * const form = new <Admin>.Form();
     * form.setIcon('fa-solid fa-right-to-bracket');
     * @returns {Form} The form.
     */
    setIcon(icon: string) {
        this.icon = icon;
        return this;
    }

    /**
     * Set the request of the form.
     * @param {RequestOptions} data - The request path and method of the form.
     * @example
     * const form = new <Admin>.Form();
     * form.setRequest({ path: '/api', method: 'POST' });
     * @returns {Form} The form.
    */
    setRequest(data: RequestOptions) {
        this.request = data;
        return this;
    }

    /**
     * Set the submit button of the form.
     * @param {SubmitButtonOptions} data - The submit button of the form.
     * @example
     * const form = new <Admin>.Form();
     * form.setSubmitButton({ label: 'Submit', color: 'primary', disabled: false });
     * @returns {Form} The form.
     */
    setSubmitButton(data: SubmitButtonOptions) {
        this.submitButton = data;
        return this;
    }

    /**
     * Render the form.
     * @param {Object} [data={}] - The data to render the form with.
     * @example
     * const form = new <Admin>.Form();
     * form.render();
     * @returns {html} The rendered form.
     */
    async render(data: RenderOptions) {
        return {
            html: ejs.renderFile(path.join(__dirname, "../templates/form.ejs"), {
                form: this,
                render: data || {}
            })
        }
    }
}

export {
    Page, Form
}
