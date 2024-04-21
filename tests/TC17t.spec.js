const { test, expect } = require('@playwright/test')

test.only('multiple file upload', async ({ page }) => {
    await page.goto('')
    
    
    await page.waitForTimeout(6000)

})

