const {test,expect} = require('@playwright/test')

test('Handling Iframe with playwright using .frameLocator()',async({page}) => {

    await page.goto('https://letcode.in/frame')
    const frame1 = await page.frameLocator('iframe[src="frameUI"]')
    await frame1.locator('input[name="fname"]').fill("Pooja")
    await frame1.locator('input[name="lname"]').fill("Sharma")
    expect(frame1.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(3000)
})

// by using .frame() method with name attribute
test('Handling iframe with playwright using .frame() by name attribute',async({page}) =>{
    await page.goto('https://letcode.in/frame')
    const frame2 = await page.frame('iframe[name="firstFr"]')
    await frame2.locator('input[name="fname"]').fill("Pooja")
    await frame2.locator('input[name="lname"]').fill("Sharma")
    expect(frame2.locator('input[name="lname"]')).toBeVisible()
    await page.waitForTimeout(3000)
})

// by using .frame() method by url
test.only('Handling iframe with playwright using .frame() by url',async({page}) =>{
    await page.goto('https://letcode.in/frame')
    const frame3 = await page.frame('https://letcode.in/frameUI')
    await frame3.locator('input[name="fname"]').fill("Pooja")
    await frame3.locator('input[name="lname"]').fill("Sharma")
    expect(frame2.locator('input[name="lname"]')).toBeVisible()
    await page.waitForTimeout(3000)
})
