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

test('Multiple file upload',async({page}) =>{
    await page.goto('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')
    await page.locator('#ember784').setInputFiles('tests/UploadData/File no 1.pdf')
    const aa = await page.locator('#ember804')
    // await expect(aa).toContain(1)
    await page.waitForTimeout(5000)   
})


test.only('Multiple file upload from demo site',async({page}) =>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('input[type="file"]').setInputFiles(['tests/UploadData/File no 1.pdf','tests/UploadData/file no.2.pdf'])
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('File no 1.pdf')
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('file no.2.pdf')
    await page.waitForTimeout(5000) 
    
    // for file removing
    await page.locator('input[type="file"]').setInputFiles([])
    await expect(page.locator('#fileList >li')).toHaveText('No Files Selected')
    await page.waitForTimeout(5000) 

})