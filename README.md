	
<div align="center">
    <br />
    <p>
        <a href="https://github.com/abdooo9/admin-side"><img src="./docs/imgs/.gitbook/assets/banner.png" width="546" alt="admin-side" /></a>
    </p>
    <br />
    <p>
        <a href="https://www.npmjs.com/package/admin-side"><img src="https://img.shields.io/npm/v/admin-side.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/admin-side"><img src="https://img.shields.io/npm/dt/admin-side.svg?maxAge=3600" alt="npm downloads" /></a>
</div>

# Index
- [About](#about)
- [Help this project stay strong! &#128170;](#help-this-project-stay-strong-)
- [Installation](#installation)
- [Example Usage](#example-usage)
- [Documentation](#documentation)
- [License](#license)

## About
admin-side is a powerful [Node.js](https://nodejs.org) module that allows you to easily build your web admin panel.
- Object-oriented
- Useful for websites & large projects where it makes managing data easier & faster
- Performant
- Easy to use
- Bootstrap 5.3.0 style

## Help this project stay strong! &#128170;
If you like this project, please consider supporting it by donating. This will help me to continue working on this project and keep it up to date.

- Donate on PayPal [Donate](https://www.paypal.me/abd0009)
- Donate on Patreon [Donate](https://www.patreon.com/abdo9)
- Become a sponsor on GitHub [Sponsor](https://github.com/sponsors/abdooo9)

## Installation
```sh-session
npm install admin-side
```

## Example Usage

define a modules and craete a new form
```js
const { Form, Page } = require('admin-side');
const app = require('express')();

const form = new Form()
    .setRequest({ path: '/admin/signup', method: "post" })
    // will set the form action to /admin/signup and the method to post

    .addField({ id: "name", label: "name", type: "text" })
    // will add a text input with the id name and the label name
    
    .setSubmitButton({ label: "Sign Up", color: "outline-success" })
    // will add a submit button with the label Sign Up and the color outline-success
```

render the form and send it to the client
```js
app.get('/admin/signup', async (req, res) => {
    res.send((await form.render()).html)
})
```

## Documentation
#### Classes
- [Page](./docs/classes/page.md)
- [Form](./docs/classes/form.md)

## License
© admin-side, 2023 | AbdulRahman (contact@iabdo.me)
[MIT](./LICENSE) License
