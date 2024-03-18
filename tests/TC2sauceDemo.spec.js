const {test,expect} = require('@playwright/test')

test.only('verify the login functionality of saucedemo with valid credential',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await page.waitForTimeout(5000)

    await expect(page.locator('.app_logo')).toHaveText('Swag Labs')
    await expect(page.locator('.title')).toHaveText('Products')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')

})

test.only('verify the login functionality of saucedemo with invalid credential',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standarduser')
    await page.locator('#password').fill('secretsauce123')
    await page.locator('#login-button').click()
    await page.waitForTimeout(4000)

    await expect(page.locator('.error-button')).toBeVisible()
    await expect(page.locator('.error-button')).toHaveText('Epic sadface: Username and password do not match any user in this service')
    await expect(page).toHaveURL('https://www.saucedemo.com/')

})