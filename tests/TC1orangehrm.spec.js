const { test,expect} = require('@playwright/test');
const exp = require('constants');

test('verify the orangehrm login functionality with valid credential',async({page})=>{
    // AAA
    // Arrangement:
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    // Action:
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    await page.waitForTimeout(4000)

    // Assertion:
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    await expect(page.locator('.oxd-brand-banner')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await expect(page).toHaveTitle('OrangeHRM')
})

test.only('',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('admin')
    await page.locator('input[name="password"]').fill('admin56')
    await page.locator('button[type="submit"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
    await expect(page.locator('.oxd-alert-content-text')).toBeVisible()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page.locator('.orangehrm-login-forgot-header')).toHaveText('Forgot your password? ')
    await expect(page.locator('.orangehrm-login-forgot-header')).toBeVisible()


})