const {test,expect} = require('@playwright/test')

test.only('AutoComplete Text field',async({page}) => {

    await page.goto('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
    await page.locator('#myInput').fill('A',{delay:2000})
    await page.waitForSelector('#myInputautocomplete-list > div')
    let divText = await page.locator('#myInputautocomplete-list > div').count()
    console.log(divText)

    for(let i = 0; i < divText; i++){
        let text = await page.locator('#myInputautocomplete-list > div').nth(i).textContent()
        console.log(text)
        
        if(text.includes('Apple')){
            await page.locator('#submit-button').click()
            break;
        }

        // if(text === "Apple"){
        //     await page.locator('#submit-button').click()
        //     break;
        // }   
    }

    await page.waitForTimeout(5000)
})