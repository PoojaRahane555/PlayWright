const {test , expect} = require("@playwright/test")

test("Handeling rario buttons with playwright",async({page}) =>{
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-7-2')).not.toBeChecked()
    await page.locator('#vfb-7-2').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('#vfb-7-2')).toBeChecked()

    await page.locator('#vfb-7-3').check()
    await expect(page.locator('#vfb-7-2')).not.toBeChecked
})

test("Handeling Checkboxes with playwright",async({page}) =>{
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-1')).not.toBeChecked()
    await page.locator('#vfb-6-1').check()
    await page.waitForTimeout(3000)
    await expect(page.locator('#vfb-6-1')).toBeChecked()

    await page.locator('#vfb-6-2').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('#vfb-6-2')).toBeChecked()

    await page.locator('#vfb-6-0').check()
    await page.waitForTimeout(1000)
    await expect(page.locator('#vfb-6-0')).toBeChecked()
})

test.only("Handeling checkboxes with click method", async({page}) =>{
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await page.locator('#vfb-6-2').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('#vfb-6-2')).toBeChecked()
})