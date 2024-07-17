const {test, expect} = require('@playwright/test')

test.beforeEach(async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
})

test('Verify the alert in Playwright',async({page}) =>{
    page.on('dialog',async alert =>{
        await expect(alert.message()).toContain('I am an alert box!')
        await expect(alert.type()).toContain('alert')
        await alert.accept()
    })
    await page.locator('.btn-danger').click()
})

test('Verify the confirm alert in Playwright',async({page}) =>{
    page.on('dialog',async confirm =>{
        await expect(confirm.message()).toContain('Press a Button !')
        await expect(confirm.type()).toContain('confirm')
        await confirm.accept()
    })
    await page.locator('.analystic').nth(1).click()
    await page.locator('.btn-primary').click()
    await expect(page.locator('#demo')).toHaveText('You pressed Ok')
    await page.waitForTimeout(5000)
})

test.only('Verify the prompt alert in Playwright',async({page}) =>{
    page.on('dialog',async prompt =>{
        await expect(prompt.message()).toContain('Please enter your name')
        await expect(prompt.type()).toContain('prompt')
        await prompt.accept('Automation Testing user')
    })
    await page.locator('.analystic').last().click()
    await page.locator('.btn-info').click()
    await expect(page.locator('#demo1')).toContainText('Hello Automation Testing user How are you today')
    await page.waitForTimeout(5000)
})