const {test,expect} = require('@playwright/test')
import { Login } from '../pages/naveenLogin'
import info from '../../TestData/naveen.json'

test.beforeEach(async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
})

info.email = `poojarahane${(Math.floor(Math.random()*1000)+1)}@gmail.com`
test.only('Validate the NaveenAutomation form',async({page}) =>{
    let pge = new Login(page)
    await pge.clickBtn()
    await pge.fillRegisterForm(info)
    // await pge.fillReturningForm(info)
    await page.waitForTimeout(5000)
})