const {test,expect} = require('@playwright/test')
import info from '../../TestData/webContactLogin.json'

import { Login } from '../pages/webContactLogin2'

test.beforeEach(async ({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
})

test('Verify the login form with valid data',async({page}) =>{
    let pge = new Login(page)
    await pge.fillForm(info.first_name,info.last_name,info.email,info.message)
    await pge.clickBtn()
    await pge.validText('Thank You for your Message!')
})

test.only('Verify the contactUs login form with valid data',async({page}) =>{
    let pge = new Login(page)
    await pge.fillForm(info)
    await pge.clickBtn()
    await pge.validText('Thank You for your Message!')
})