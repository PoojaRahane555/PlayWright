const { test, expect, request } = require('@playwright/test')

test('Reqres Api with Get request', async ({ request }) => {
    let req = await request.get('https://reqres.in/api/users?page=2')
    console.log(await req.status())
    await expect(req.status()).toBe(200)

    let resp = await req.json()
    console.log(await resp)
    await expect(resp.page).toBe(2)
    await expect(resp.total).toBe(12)

    console.log(await resp.data[1].last_name)
})

test('Reqres Api with Post request', async ({ request }) => {
    let reqTwo = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Pooja",
            "job": "Automation tester"
        },
        headers: { "Content-Type": "application/json" },
    })
    console.log(await reqTwo.status())
    await expect(reqTwo.status()).toBe(201)

    let respTwo = await reqTwo.json()
    console.log(await respTwo)
    console.log(await respTwo.name)
    await expect(respTwo.name).toBe("Pooja")
    await expect(respTwo.job).toBe("Automation tester")
})

test('Reqres Api with Put request', async ({ request }) => {
    let req3 = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Pooja Lokhande",
            "job": "Senior Automation Tester"
        },
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(await req3.status())
    await expect(req3.status()).toBe(200)

    let respThree = await req3.json()
    console.log(respThree)
    await expect(respThree.name).toBe('Pooja Lokhande')
    await expect(respThree.job).toBe('Senior Automation Tester')
})

test.only('Reqres Api with Delete request',async({request}) =>{
    let req4 = await request.delete('https://reqres.in/api/users/2')
    console.log(req4.status())
    await expect(req4.status()).toBe(204)
    
})



