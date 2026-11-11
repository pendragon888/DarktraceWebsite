import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Error 404 page for Darktrace", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Error 404 page present', async ({ error404Page, page }) => {
        await error404Page.goto()
        await expect(page).toHaveTitle('Page Not Found | Darktrace')
        await expect(error404Page.main).toContainText("Error 404")
        await expect(error404Page.homepageLink).toBeVisible()
        await expect(error404Page.resourcesLink).toBeVisible()
    })
})