const { expect } = require("@playwright/test")

exports.Login = class Login{

    selector = {
        first_name : '[name="first_name"]',
        last_name : '[name="last_name"]',
        email : '[name="email"]',
        message : '[name="message"]',
        submit : '[type="submit"]',
        assertion : 'h1'
    }

    constructor(page){
        this.page = page
        this.first_name = page.locator(this.selector.first_name)
        this.last_name = page.locator(this.selector.last_name)
        this.email = page.locator(this.selector.email)
        this.message = page.locator(this.selector.message)
        this.submit = page.locator(this.selector.submit) 
        this.assertion = page.locator(this.selector.assertion) 
    }
    async fillForm(fn,ln,eml,msg){
        await this.first_name.fill(fn)
        await this.last_name.fill(ln)
        await this.email.fill(eml)
        await this.message.fill(msg)
    }

    async clickBtn(){
        await this.submit.click()
    }

    async validText(txt){
        await expect(this.assertion).toHaveText(txt)
    }
}
