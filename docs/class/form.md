---
description: Create a new Form
---

# Form

## Constructor

```javascript
new Form(data);
```

| PARAMETER |                   TYPE                   | OPTIONAL | DEFAULT |  DESCRIPTION |
| :-------: | :--------------------------------------: | :------: | :-----: | :----------: |
|    data   | [FormOptions](../typedef/formoptions.md) |     ✓    |    {}   | Form options |

## Table of Contents

|               Properties              |                   Methods                   |
| :-----------------------------------: | :-----------------------------------------: |
|        [title](form.md#.title)        |        [setTitle](form.md#.settitle)        |
|         [icon](form.md#.icon)         |         [setIcon](form.md#.seticon)         |
|       [fields](form.md#.fields)       |        [addField](form.md#.addfield)        |
|      [request](form.md#.request)      |      [setRequest](form.md#.setrequest)      |
| [submitButton](form.md#.submitbutton) | [setSubmitButton](form.md#.setsubmitbutton) |
|                                       |          [render](form.md#.render)          |

## Properties

#### **.title**

The form title Type: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)

***

#### **.icon**

The form icon from [FontAwesome](https://fontawesome.com/icons?d=gallery) Type: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String)

***

#### **.fields**

The form fields Type: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Array)<[Field](../typedefs/FieldOptions.md)>

***

#### **.request**

The request path and method of the form. Type: ?[Request](../typedefs/RequestOptions.md)

***

#### **.submitButton**

The submit button of the form. Type: ?[Button](../typedefs/ButtonOptions.md)



{% hint style="info" %}
Support this project to **complete its life**

* Donate on PayPal [Donate](https://www.paypal.me/abd0009)
* Donate on Patreon [Donate](https://www.patreon.com/abdo9)
* Become a sponsor on GitHub [Sponsor](https://github.com/sponsors/abdooo9)
{% endhint %}

## Methods

#### **.setTitle**

Set the form title

| PARAMETER |                                                TYPE                                                | OPTIONAL |  DEFAULT |   DESCRIPTION  |
| :-------: | :------------------------------------------------------------------------------------------------: | :------: | :------: | :------------: |
|   title   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) |     ✓    | Untitled | The form title |

Returns: [Form](../classes/form.md)

***

#### **.setIcon**

Set the form icon

| PARAMETER |                                                TYPE                                                | OPTIONAL | DEFAULT |  DESCRIPTION  |
| :-------: | :------------------------------------------------------------------------------------------------: | :------: | :-----: | :-----------: |
|    icon   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) |     ✓    |         | The form icon |

Returns: [Form](../classes/form.md)

***

#### **.addField**

Add a field to the form

| PARAMETER |                 TYPE                 | OPTIONAL | DEFAULT |    DESCRIPTION   |
| :-------: | :----------------------------------: | :------: | :-----: | :--------------: |
|   field   | [Field](../typedefs/FieldOptions.md) |     ✓    |         | The field to add |

Returns: [Form](../classes/form.md)

***

#### **.setRequest**

Set the form request path and method

| PARAMETER |                   TYPE                   | OPTIONAL | DEFAULT |         DESCRIPTION         |
| :-------: | :--------------------------------------: | :------: | :-----: | :-------------------------: |
|  request  | [Request](../typedefs/RequestOptions.md) |     ✓    |         | The request path and method |

Returns: [Form](../classes/form.md)

***

#### **.setSubmitButton**

Set the form submit button

| PARAMETER |                  TYPE                  | OPTIONAL | DEFAULT |    DESCRIPTION    |
| :-------: | :------------------------------------: | :------: | :-----: | :---------------: |
|   button  | [Button](../typedefs/ButtonOptions.md) |     ✓    |         | The submit button |

Returns: [Form](../classes/form.md)

***

#### **.render**

Render the form Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise)<[RenderedPage](../typedefs/RenderedPage.md)>

\
