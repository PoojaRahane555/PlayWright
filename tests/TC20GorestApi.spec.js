const { test, expect, request } = require('@playwright/test')
const exp = require('constants')
let id = 
test('Gorest Get Api request', async ({ request }) => {
    let req = await request.get('https://gorest.co.in/public/v2/users', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ' Bearer 683ebbf86a12f1df0f7fe5ec14453a996d052a8914adb93b453324bbb669cd92'
        }
    })

    let resp = await req.json()
    console.log(resp)
    expect(await resp[1].id).toBe(6898681)
    expect(await resp[1].name).toBe('Pooja Lokhande')
})

test.only('Gorest Post Api request', async ({ request }) => {
    let reqTwo = await request.post('https://gorest.co.in/public/v2/users', {
        data: {
            "name": "Aarvi Lokhande",
            "gender": "Female",
            "email": `aarvi.lokhande@${Math.floor(Math.random()*1000)+1}gmail.com`,
            "status": "active"
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 683ebbf86a12f1df0f7fe5ec14453a996d052a8914adb93b453324bbb669cd92'
        }
    })

    let respTwo = await reqTwo.json()
    console.log(respTwo)
    console.log(await reqTwo.status())
    await expect(reqTwo.status()).toBe(201)
    expect(await respTwo.name).toBe('Aarvi Lokhande')
    id = respTwo.id
    expect(await respTwo.id).toBe(id)
})

test('Gorest Put Api request',async({request}) =>{

})