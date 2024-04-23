const { test, expect } = require('@playwright/test')
const info = require("../tests/TestData/contactUs.json")

test('Verify contactUs form with valid data', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill('Pooja')
    await page.locator('[name="last_name"]').fill('Lokhande')
    await page.locator('[name="email"]').fill('poojalokhande63836@gmail.com')
    await page.locator('[name="message"]').fill('I am learnig Playwright')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
    await page.waitForTimeout(3000)
})

test.skip('Verify contactUs form using fixture data', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(info.firstName)
    await page.locator('[name="last_name"]').fill(info.lastName)
    await page.locator('[name="email"]').fill(info.email)
    await page.locator('[name="message"]').fill(info.message)
    await page.locator('[type="submit"]').click()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
    // await page.waitForTimeout(5000)
})

info.forEach(function(el){
    test(`Verify contactUs form using fixture data ${el.firstName}`, async ({ page }) => {
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('[name="first_name"]').fill(el.firstName)
        await page.locator('[name="last_name"]').fill(el.lastName)
        await page.locator('[name="email"]').fill(el.email)
        await page.locator('[name="message"]').fill(el.message)
        await page.locator('[type="submit"]').click()
        await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
        // await page.waitForTimeout(6000)
    })
})



