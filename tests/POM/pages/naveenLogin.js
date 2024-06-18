const {expect} = require('@playwright/test')

exports.Login = class Login {

    selector = {
    registerCon : '.btn-primary',
    email : '[name="email"]',
    password : '[name="password"]',
    loginBtn : '[value="Login"]',
    firstName : '#input-firstname',
    lastName : '[name="lastname"]',
    telephone : '#input-telephone',
    confPass : '[name="confirm"]',
    subscribe : '.radio-inline > [value="1"]',
    agree : '[name="agree"]',
    continue : '[value="Continue"]',
    assert : 'h1'
    }

    constructor(page){
        this.page = page
        this.email = page.locator(this.selector.email)
        this.password = page.locator(this.selector.password)
        this.loginBtn = page.locator(this.selector.loginBtn)
        this.firstName = page.locator(this.selector.firstName)
        this.lastName = page.locator(this.selector.lastName)
        this.telephone = page.locator(this.selector.telephone)
        this.confPass = page.locator(this.selector.confPass)
        this.subscribe = page.locator(this.selector.subscribe)
        this.agree = page.locator(this.selector.agree)
        this.continue = page.locator(this.selector.continue)
        this.assert = page.locator(this.selector.assert)
        this.registerCon = page.locator(this.selector.registerCon)
        this.assert = page.locator(this.selector.assert)
    }

    async clickBtn(){
        await this.registerCon.first().click()
    }

    async fillRegisterForm(info){
        await this.firstName.fill(info.firstName)
        await this.lastName.fill(info.lastName)
        await this.email.fill(info.email)
        await this.telephone.fill(info.telephone)
        await this.password.fill(info.password)
        await this.confPass.fill(info.password)
        await this.subscribe.click()
        await this.agree.click()
        await this.continue.click()
        await expect(this.assert).toHaveText(info.text)
    }

    // async fillReturningForm(info){
    //     await this.email.fill(info.email)
    //     await this.password.fill(info.password)
    //     await this.loginBtn.click()
    // }

}
