const{test,expect} = require('@playwright/test')

test('Validate login functionality with valid credentials',async({page}) =>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page.locator('.post-title')).toHaveText('Logged In Successfully')
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation')
    await page.waitForTimeout(5000)
})
