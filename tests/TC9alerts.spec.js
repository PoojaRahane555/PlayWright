const {test,expect} = require('@playwright/test')

test('Handling simple js alert with Playwright',async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async alert =>{
        await expect(alert.message()).toContain('I am a JS Alert')
        await expect(alert.type()).toContain('alert')
        await alert.accept()
    })
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.waitForTimeout(5000)
})

test('Handling confirm js alert with Playwright',async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async confirm =>{
        await expect(confirm.message()).toContain('I am a JS Confirm')
        await expect(confirm.type()).toContain('confirm')
        // await confirm.accept()
        await confirm.dismiss()
    })
    await page.locator('button[onclick="jsConfirm()"]').click()
    // await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    await page.waitForTimeout(5000)
})

test.only('Handling prompt js alert with Playwright',async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async prompt =>{
        await expect(prompt.message()).toContain('I am a JS prompt')
        await expect(prompt.type()).toContain('prompt')
        // await prompt.accept('hello')
        await prompt.dismiss()
    })
    await page.locator('button[onclick="jsPrompt()"]').click()
    // await expect(page.locator('#result')).toHaveText('You entered: hello')
    await expect(page.locator('#result')).toHaveText('You entered: null')
    await page.waitForTimeout(5000)
})