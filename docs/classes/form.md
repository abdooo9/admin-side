# Form
Create a form.

### Constructor
```js
new Form(data);
```

| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| data | [FormOptions](../typedefs/FormOptions.md) | &check; | {} | Form options |

### Table of Contents
| Properties | Methods |
| :-----------: | :-----------: |
| [title](#title) | [setTitle](#settitle) |
| [icon](#icon) | [setIcon](#seticon) |
| [fields](#fields) | [addField](#addfield) |
| [request](#request) | [setRequest](#setrequest) |
| [submitButton](#submitbutton) | [setSubmitButton](#setsubmitbutton) |
|  | [render](#render) |

<hr>

### Properties
#### .title
The form title
Type: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<hr>

#### .icon
The form icon from [FontAwesome](https://fontawesome.com/icons?d=gallery)
Type: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<hr>

#### .fields
The form fields
Type: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Field](../typedefs/FieldOptions.md)>

<hr>

#### .request
The request path and method of the form.
Type: ?[Request](../typedefs/RequestOptions.md)

<hr>

#### .submitButton
The submit button of the form.
Type: ?[Button](../typedefs/ButtonOptions.md)

<hr>

### Methods

#### .setTitle
Set the form title
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| title | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | &check; | Untitled | The form title |
Returns: [Form](./form.md)

<hr>

#### .setIcon
Set the form icon
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| icon | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | &check; |  | The form icon |

<hr>

#### .addField
Add a field to the form
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| field | [Field](../typedefs/FieldOptions.md) | &check; |  | The field to add |
Returns: [Form](./form.md)

<hr>

#### .setRequest
Set the form request path and method
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| request | [Request](../typedefs/RequestOptions.md) | &check; |  | The request path and method |
Returns: [Form](./form.md)

<hr>

#### .setSubmitButton
Set the form submit button
| PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| button | [Button](../typedefs/ButtonOptions.md) | &check; |  | The submit button |

<hr>

#### .render
Render the form
Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[RenderedPage](../typedefs/RenderedPage.md)>

<hr>
