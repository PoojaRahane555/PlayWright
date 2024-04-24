const {test,expect} = require('@playwright/test')

const {customTest} = require('../tests/TestData/contactUs')

customTest.only('Verify contacts form by using fixture js file',async({page,dataForContactUs})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('[name="first_name"]').fill(dataForContactUs.firstName)
        await page.locator('[name="last_name"]').fill(dataForContactUs.lastName)
        await page.locator('[name="email"]').fill(dataForContactUs.email)
        await page.locator('[name="message"]').fill(dataForContactUs.message)
        await page.locator('[type="submit"]').click()
        await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})