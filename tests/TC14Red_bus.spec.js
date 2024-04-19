const { test, expect } = require('@playwright/test')

// when we click on date then calender gets disappear to choose css follow this step...
// click on event listener => blur => remove  

test('Calender for redBus', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    const day = "19"
    const month = "Jul"
    const year = "2026"

    let monthYr = `${month} ${year}`

    await page.locator('#onwardCal').click()

    while (true) {
        let text = await page.locator('.DayNavigator__CalendarHeader-qj8jdz-1 > div[style="flex-grow: 2; font-size: 0.875rem;"]')
        .textContent()
        console.log(text)
        let mnthyr = text.slice(0,8)
        console.log(mnthyr)

        if(mnthyr === monthYr){
            break;
        }  
        await page
        .locator('div[style="flex-grow: 1; cursor: pointer;"]').last() .click();  
        console.log(monthYr)
    }
    const dayCount = await page.locator('.DayTiles__CalendarDaysBlock-sc-1xum02u-0.isgDNj').count()
    console.log(dayCount)

    for(let i = 0; i < dayCount; i++){
        let text = await page.locator('.DayTiles__CalendarDaysBlock-sc-1xum02u-0.isgDNj').nth(i).textContent()
        console.log(text)
        if(text == day){
            await page.locator('.DayTiles__CalendarDaysBlock-sc-1xum02u-0.isgDNj').nth(i).click()
            break;
        }
    }
    await page.waitForTimeout(5000)
})