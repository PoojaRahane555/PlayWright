const {test,expect} = require('@playwright/test')

test('Verify datePicker functionality in playwright by using object',async({page}) =>{
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const date = new Date()
    let dt = date.getDate()
    console.log(dt)

    // let mnth = date.getMonth()            // current month index
    // let mnth = date.getMonth() + 1        // to get month in number
    // let mnths = `${0}${mnth}`
    // let mnth = date.toLocaleString('default',{month:'short'})   // to get month name in short form
    let mnth = date.toLocaleString('default',{month:'long'})       // to get month name in long form
    console.log(mnth)
    // console.log(mnths)

    let year = date.getFullYear()
    console.log(year)
    let currentDate = `${dt} ${mnth} ${ year}`
    console.log(currentDate)
    await page.waitForTimeout(3000)
})

test.only('Verify datePicker functionality ',async({page}) =>{
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const date2 = new Date()
    let d = date2.getDate()
    console.log(d)

    // let mnth2 = date2.toLocaleString('default',{month:'long'})      
    // console.log(mnth2)


    // let year2 = date2.getFullYear()
    // console.log(year2)
    // let currentDate = `${dat} ${mnth2} ${ year2}`
    // console.log(currentDate)
    await page.waitForTimeout(3000)
})