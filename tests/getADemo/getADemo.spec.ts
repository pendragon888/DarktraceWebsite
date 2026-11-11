import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Get a Demo page for Darktrace", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Get a Demo page present', async ({ getADemoPage }) => {
        await getADemoPage.goto()
        await expect(getADemoPage.heading).toBeVisible()
        await expect(getADemoPage.heading).toContainText('See what Darktrace finds in your environment')
    })
})