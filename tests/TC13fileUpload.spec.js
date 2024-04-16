const {test,expect} = require('@playwright/test')

test('File uplode',async({page}) =>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UploadData/File no 1.pdf')
     page.on('dialog', async simplealert   =>{
        await expect(simplealert.message()).toContain('Your file has now been uploaded!')
        await expect(simplealert.type()).toContain('alert')
        simplealert.accept()

    })
    await page.locator('#submit-button').click()
    await expect(page.url()).toEqual('https://webdriveruniversity.com/File-Upload/index.html?filename=File+no+1.pdf')
    await page.waitForTimeout(5000)
})