const {test,expect} = require('@playwright/test')

test('Shadow Dom Element',async({page}) =>{
    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator('#input').fill('Pooja')
    await page.waitForTimeout(3000)
})

test.only('Shadow Dom Element ',async({page}) =>{
    await page.goto('https://www.lambdatest.com/selenium-playground/shadow-dom')
    await page.locator('[name="username"]').fill('Lambda Test')
    await page.locator('.col-8 >[name="email"]').fill('LambdaTest@test.com')
    await page.locator('[name="password"]').fill('LambdaTest@12')
    await page.locator('[name="confirm_password"]').fill('LambdaTest@12')
    await page.locator('.btn-primary').click()
    await page.waitForTimeout(5000)
})