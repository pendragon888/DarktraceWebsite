import { test, expect } from "@fixtures/pages.fixture";

test.describe('API smoke testing', async () => {
    test.describe.configure({ retries:1 })
    test('GET landingPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL!, {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET error404Page', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'invalid', {
        })

        expect(response.status()).toBe(404)
        const body = await response.body()
        expect(body).toBeTruthy()
    })
})