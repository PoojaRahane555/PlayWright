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

test.only('Reqres Api with Post request', async ({ request }) => {
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