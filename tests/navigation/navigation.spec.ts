import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Darktrace and view navigation", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Landing page present', async ({ landingPage, navigationPage }) => {
        await landingPage.goto()
        await expect (landingPage.homeBannerMain).toBeVisible()
        await navigationPage.navToPlatform.hover()
        await expect (navigationPage.navToDarktracePlatform).toBeVisible()
        await navigationPage.navToSolutions.hover()
        await expect (navigationPage.navToRansomware).toBeVisible()
        await navigationPage.navToWhyDarktrace.hover()
        await expect (navigationPage.navToOurAI).toBeVisible()
        await navigationPage.navToPartners.hover()
        await expect (navigationPage.navToOverview).toBeVisible()
        await navigationPage.navToResources.hover()
        await expect (navigationPage.navToDarktraceBlog).toBeVisible()
        await expect(navigationPage.navToGetADemo).toBeVisible()
   })
})