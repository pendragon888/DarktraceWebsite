import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Overview page for Darktrace", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Overview page present', async ({ overviewPage }) => {
        await overviewPage.goto()
        await expect(overviewPage.heading).toBeVisible()
        await expect(overviewPage.header).toContainText('Better Together')
        await expect(overviewPage.header).toContainText('Discover the value a partnership with Darktrace can bring to you and your customers, as we fundamentally transform your ability to reduce cyber disruption.')
    })
})