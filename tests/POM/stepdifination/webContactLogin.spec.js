const {test , expect} = require('@playwright/test')
import { Login } from '../pages/webContactLogin'

test.beforeEach(async({page}) =>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')

})

test('login form', async({page}) =>{
    let Fdata = new Login(page)
    await Fdata.fillForm('Pooja',"Rahane",'poojarahane@gmail.com','I am learning playwright')
    await Fdata.clickBtn()
    await Fdata.validText('Thank You for your Message!')
    await page.waitForTimeout(5000)
})
