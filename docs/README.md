---
description: >-
  Admin-Side is a Powerful Node.js module that allows you to easily build your
  web admin panel.
---

# Get Started

<figure><img src=".gitbook/assets/banner.png" alt="admin-side"><figcaption></figcaption></figure>

_This package is meant to provide an easy way to_ create an admin panel, with which you can control and create forms, tables, etc.

## About

admin-side is a powerful [Node.js](https://nodejs.org/) module that allows you to easily build your web admin panel.

* Object-oriented
* Useful for websites & large projects where it makes managing data easier & faster
* Performant
* Easy to use
* Bootstrap 5.3.0 style

## Help this project stay strong! 💪

If you like this project, please consider supporting it by donating. This will help me to continue working on this project and keep it up to date.

* Donate on PayPal [Donate](https://www.paypal.me/abd0009)
* Donate on Patreon [Donate](https://www.patreon.com/abdo9)
* Become a sponsor on GitHub [Sponsor](https://github.com/sponsors/abdooo9)

## Installation

```shell-session
npm i admin-side
```

## Example Usage

define a modules and craete a new form

{% code title="Admin.js" lineNumbers="true" %}
```javascript
const { Form, Page } = require('admin-side');
const app = require('express')();

const form = new Form()
    .setRequest({ path: '/admin/signup', method: "post" })
    // will set the form action to /admin/signup and the method to post

    .addField({ id: "name", label: "name", type: "text" })
    // will add a text input with the id name and the label name
    
    .setSubmitButton({ label: "Sign Up", color: "outline-success" })
    // will add a submit button with the label Sign Up and the color outline-success
    
// render the form and send it to the client
app.get('/admin/signup', async (req, res) => {
    res.send((await form.render()).html)
})
```
{% endcode %}

## Documentation

### **Classes**

* [Page](classes/page.md)
* [Form](classes/form.md)
