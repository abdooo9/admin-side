const Admin = require('../dist/index.js');

const form = new Admin.Form()
    .setRequest({ path: '/test', method: "post" })
    .setTitle("تسجيل مستخدم جديد")
    .addField({ id: "name", label: "الاسم", type: "text" })
    .addField({ id: "email", label: "البريد الإلكتروني", type: "email" })
    .addField({ id: "password", label: "كلمة المرور", type: "password" })
    .setSubmitButton({ label: "حفظ", color: "outline-success" })

console.log(form.render({ dir: "rtl", lang: "en", styleInclude: true }).html.toString())

async function run() {
    console.log((await (await form.render({ dir: "rtl", lang: "en", styleInclude: true })).html).toString())
    new Admin.Page({ items: [form] })
}
run()