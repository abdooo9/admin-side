"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.Page = void 0;
const ejs = require("ejs");
const path = require("path");
class Page {
    /**
     * Craete a page
     * @name Page
     * @param {PageOptions|Object} [data={}] - The data to create the form with.
     * @example
     * const form = new <Admin>.Page();
    */
    constructor(data) {
        this.setup(data);
    }
    setup(data) {
        /**
         * @name Page#title
         * @type {PageOptions}
         * @description The title of the page.
         * @example
         * const page = new <Admin>.Page({
         *  title: "This is a title."
         * });
         */
        this.title = (data === null || data === void 0 ? void 0 : data.title) || "Untitled";
        /**
         * @name Page#description
         * @type {PageOptions}
         * @description The description of the page.
         * @example
         * const page = new <Admin>.Page({
         *   description: "This is a description."
         * });
         */
        this.description = (data === null || data === void 0 ? void 0 : data.description) || null;
        /**
         * @name Page#backgroundColor
         * @type {PageOptions}
         * @description The background color of the page.
         * @example
         * const page = new <Admin>.Page({
         *     backgroundColor: "#fff000"
         * });
         */
        this.backgroundColor = (data === null || data === void 0 ? void 0 : data.backgroundColor) || null;
        /**
         * @name Page#items
         * @type {PageOptions}
         * @description The items of the page.
         * @example
         * const page = new <Admin>.Page({
         *    items: [new <Admin>.Form()]
         * });
         */
        this.items = (data === null || data === void 0 ? void 0 : data.items) || [];
    }
    /**
     * Add item to the page.
     * @param {any} item - The item to add.
     * @example
     * const page = new <Admin>.Page();
     * page.addItem(new <Admin>.Form());
     * @returns {Page} The page.
     */
    addItem(item) {
        this.items.push(item);
        return this;
    }
    /**
     * Render the page.
     * @param {RenderOptions} [options={}] - The options to render the page with.
     * @example
     * const page = new <Admin>.Page();
     * page.render();
     * @returns {string} The rendered page.
     */
    render(data) {
        const renderOptions = {
            lang: data.lang || "en",
            dir: data.dir || "ltr",
            styleInclude: data.styleInclude || true
        };
        return ejs.renderFile(path.join(__dirname, "..", "views", "page.ejs"), {
            page: this,
            renderOptions
        });
    }
}
exports.Page = Page;
class Form {
    /**
     * Craete a form.
     * @name Form
     * @param {FormOptions|Object} [data={}] - The data to construct the Form with.
     * @example
     * const form = new <Admin>.Form();
    */
    constructor(data) {
        this.setup(data);
    }
    setup(data) {
        /**
         * @name Form#title
         * @type {FormOptions}
         * @description The title of the form.
         * @example
         * const form = new <Admin>.Form({ title: 'This is a title' });
         */
        this.title = (data === null || data === void 0 ? void 0 : data.title) || undefined;
        /**
         * @name Form#icon
         * @type {FormOptions}
         * @description The [fontawesome](https://fontawesome.com/start) icon to display on the title of the form.
         * @example
         * const form = new <Admin>.Form({ icon: 'fa-solid fa-right-to-bracket' });
         */
        this.icon = (data === null || data === void 0 ? void 0 : data.icon) || undefined;
        /**
         * @name Form#fields
         * @type {FormOptions}
         * @description The fields of the form.
         * @example
         * const form = new <Admin>.Form({ fields: [{ id: 'name', label: 'Enter here your name' }] });
        */
        this.fields = (data === null || data === void 0 ? void 0 : data.fields) || [];
        /**
         * @name Form#request
         * @type {FormOptions}
         * @description The request path and method of the form.
         * @example
         * const form = new <Admin>.Form({ request: { path: '/api', method: 'POST' } });
        */
        this.request = (data === null || data === void 0 ? void 0 : data.request) || { path: '/', method: 'get' };
        /**
         * @name Form#submitButton
         * @type {FormOptions}
         * @description The submit button of the form.
         * @example
         * const form = new <Admin>.Form({ submitButton: { label: 'Submit', color: 'primary', disabled: false } });
        */
        this.submitButton = (data === null || data === void 0 ? void 0 : data.submitButton) || undefined;
    }
    /**
     * Add field to the form.
     * @param {FieldOptions} field - The field to add.
     * @example
     * const form = new <Admin>.Form();
     * form.addField({ id: 'name', label: 'Enter here your name' });
    */
    addField(field) {
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
    setTitle(title) {
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
    setIcon(icon) {
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
    setRequest(data) {
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
    setSubmitButton(data) {
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
    render(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                html: ejs.renderFile(path.join(__dirname, "../templates/form.ejs"), {
                    form: this,
                    render: data || {}
                })
            };
        });
    }
}
exports.Form = Form;
//# sourceMappingURL=main.js.map