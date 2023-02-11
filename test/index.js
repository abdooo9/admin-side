const app = require('express')()
const Admin = require('../dist/index.js');

const form = new Admin.Form()
    .setRequest({ path: '/test', method: "post" })
    .setTitle("تسجيل مستخدم جديد")
    .addField({ id: "name", label: "الاسم", type: "text" })
    .addField({ id: "email", label: "البريد الإلكتروني", type: "email" })
    .addField({ id: "password", label: "كلمة المرور", type: "password" })
    .setSubmitButton({ label: "حفظ", color: "outline-success" })

const page = new Admin.Page()
    .addItem(form)

app.get("/admin", async (req, res) => {
    res.send((await page.render()).html)
})
