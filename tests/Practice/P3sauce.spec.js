const {test,expect} = require('@playwright/test')

test('Verify the sauce demo myshopify login functionality with valid credentials',async({page})=>{
    await page.goto('https://sauce-demo.myshopify.com/collections/frontpage/products/grey-jacket')
    await page.locator('#customer_register_link').first().click()
    await page.locator('[name="customer[first_name]"]').fill('Pooja')
    await page.locator('[name="customer[last_name]"]').fill('Rahane')
    await page.locator('[name="customer[email]"]').fill('poojarahane@gmail.com')
    await page.locator('[name="customer[password]"]').fill('D.pooja$123')
    await page.locator('[name="customer[email]"]').click()
    await page.waitForTimeout(5000)
    // await page.locator
})