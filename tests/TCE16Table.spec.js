const { test, expect } = require("@playwright/test")

async function selectProduct(rows,page,name){
    const matchedR = await rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedR.locator('input').check()
}

test.only('Web Table', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = await page.locator('#productTable')

    // for total no. of columns
    const column = await table.locator('thead tr th')
    console.log("No.of columns in the table: ", await column.count())
    expect(await column.count()).toBe(4)

    // for total no.of rows
    const rows = await table.locator('tbody tr')
    console.log("No.of rows in the table: ",await rows.count())
    expect(await rows.count()).toBe(5)

    // // select the particular checkbox for product 3
    // const matchedR = rows.filter({
    //     has: await page.locator('td'),
    //     hasText : 'Product 3'
    // })
    // matchedR.locator('input').check()
    // await page.waitForTimeout(5000)

    // select multiple product by using re-usable function:
    
    await selectProduct(rows,page,"Product 2")
    await selectProduct(rows,page,"Product 3")
    await selectProduct(rows,page,"Product 4")
    await page.waitForTimeout(4000)

})