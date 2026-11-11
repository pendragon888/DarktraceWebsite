import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Darktrace", ()=>{
    test('Validate Landing page present', async ({ landingPage }) => {
        await landingPage.goto()
        await expect (landingPage.homeBannerMain).toContainText('You can secure what  AI can do')
   })
})