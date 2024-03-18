const {test,expect} = require('@playwright/test')
// two types of dropDown
// 1)Static: we can select fix option
// 2)Dynamic: autosuggestive i.e, on google search icon we can search which is not fixed

test('Verify static dropDown in Playwright',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('1')
    await expect(page.locator('.subtitle')).toBeVisible()
    await expect(page.locator('.subtitle')).toHaveText('You have selected Mango')
    // await page.waitForTimeout(3000)

    await page.locator('#superheros').selectOption('ww')
    await expect(page.locator('.subtitle').last()).toBeVisible()
    await expect(page.locator('.subtitle').last()).toHaveText('You have selected Wonder Woman')
    // await page.waitForTimeout(3000)

    await page.locator('#lang').selectOption('sharp')
    await expect(page.locator('.is-success >p').last()).toBeVisible()
    await expect(page.locator('.is-success >p').last()).toHaveText('You have selected C#')
    await page.waitForTimeout(3000)
    

    await page.locator('#country').selectOption('India')
    await expect(page.locator('#country')).toHaveValue('India')
    await page.waitForTimeout(3000)
    // await expect(page.locator('')).toBeVisible()
    // await expect(page.locator('')).toHaveText()
})

test.only('verify redbus dynamic dropdown in playwright',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune',{delay:2000})
    await page.waitForSelector('.placeHolderMainText')
    await page.waitForTimeout(5000)

    let optionCount = await page.locator('.placeHolderMainText').count()
    console.log(optionCount)

    let Text = await page.locator('.placeHolderMainText').first().textContent()
    console.log(Text)

    for(let i = 0; i < optionCount; i++){
        // console.log(i)
        let Text = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(Text)

        if(Text === "Viman Nagar"){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }  
    // Assertion:
    let assert1 = await page.locator('.placeHolderMainText')
    await expect(assert1).toHaveText('Viman Nagar') 
    await page.waitForTimeout(5000)

})

test('verify redbus dropdown in playwright',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#dest').fill('Mumbai',{delay:2000})
    await page.waitForSelector('.placeHolderMainText')
    let optionCount2 = await page.locator('.placeHolderMainText').count()
    console.log(optionCount2)

    for(let i = 0 ; i < optionCount2 ; i++){
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(text)
        if(text === "Mumbai International Airport"){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
    // Assertion:
    let assert = await page.locator('.placeHolderMainText')
    await expect(assert).toHaveText('Mumbai International Airport')
})
