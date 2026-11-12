import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Darktrace and view navigation", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Navigaton menu is present', async ({ landingPage, navigationPage, page, isMobile }) => {
        await landingPage.goto()
        await expect (landingPage.homeBannerMain).toBeVisible()

        if (isMobile) {
            // mobile-specific actions
            await page.getByRole('button', { name: 'menu' }).click()
            await page.locator('#w-dropdown-toggle-5').click()
            await page.getByRole('link', { name: 'Platform™' }).click();
        } else {
            // desktop-specific actions
            await navigationPage.navToPlatform.hover()
            await expect (navigationPage.navToDarktracePlatform).toBeVisible()
            await expect (navigationPage.navToSecureAI).toBeVisible()
            await expect (navigationPage.navToEmail).toBeVisible()
            await expect (navigationPage.navToHybridNetwork).toBeVisible()
            await expect (navigationPage.navToAdaptiveAI).toBeVisible()
        }

        if (isMobile) {
            // mobile-specific actions
            await page.getByRole('button', { name: 'menu' }).click()
            await page.locator('#w-dropdown-toggle-6').click()
            await page.getByRole('link', { name: 'Ransomware', exact: true }).click()
        } else {
            // desktop-specific actions
            await navigationPage.navToSolutions.hover()
            await expect (navigationPage.navToRansomware).toBeVisible()
            await expect (navigationPage.navToAccountTakeover).toBeVisible()
            await expect (navigationPage.navToCustomerStories).toBeVisible()
            await expect (navigationPage.navToInsideTheSOC).toBeVisible()
        }

        if (isMobile) {
            // mobile-specific actions
            await page.getByRole('button', { name: 'menu' }).click()
            await page.locator('#w-dropdown-toggle-7').click()
            await expect(page.getByRole('link', { name: 'Our AI', exact: true })).toBeVisible()
            await page.getByRole('link', { name: 'Our AI', exact: true }).click()
        } else {
            // desktop-specific actions
            await navigationPage.navToWhyDarktrace.hover()
            await expect (navigationPage.navToOurAI).toBeVisible()
            await expect (navigationPage.navToOurCustomers).toBeVisible()
            await expect (navigationPage.navToIndustryRecognition).toBeVisible()
            await expect (navigationPage.navToAboutUs).toBeVisible()
            await expect (navigationPage.navToEvents).toBeVisible()
            await expect (navigationPage.navToNews).toBeVisible()
            await expect (navigationPage.navToLeadership).toBeVisible()
            await expect (navigationPage.navToCareers).toBeVisible()
            await expect (navigationPage.navToFederal).toBeVisible()
            await expect (navigationPage.navToTrustCenter).toBeVisible()
            await expect (navigationPage.navToDarktraceLive).toBeVisible()
        }

        if (isMobile) {
            // mobile-specific actions
            await page.getByRole('button', { name: 'menu' }).click()
            await page.locator('#w-dropdown-toggle-8').click()
            await expect(page.getByRole('link', { name: 'Overview' })).toBeVisible()
            await page.getByRole('link', { name: 'Overview' }).click()
        } else {
            // desktop-specific actions
            await navigationPage.navToPartners.hover()
            await expect (navigationPage.navToOverview).toBeVisible()
            await expect (navigationPage.navToTechnologyPartners).toBeVisible()
            await expect (navigationPage.navToPartnerPortal).toBeVisible()
            await expect (navigationPage.navToMicrosoft).toBeVisible()
            await expect (navigationPage.navToAWS).toBeVisible()
        }

        if (isMobile) {
            // mobile-specific actions
            await page.getByRole('button', { name: 'menu' }).click()
            await page.locator('#w-dropdown-toggle-9').click()
            await expect(page.getByRole('link', { name: 'The Darktrace Blog' })).toBeVisible()
            await page.getByRole('link', { name: 'The Darktrace Blog' }).click()
        } else {
            // desktop-specific actions
            await navigationPage.navToResources.hover()
            await expect (navigationPage.navToDarktraceBlog).toBeVisible()
            await expect (navigationPage.navToReourcesInsideTheSOC).toBeVisible()
            await expect (navigationPage.navToResourceLibrary).toBeVisible()
            await expect (navigationPage.navToReourcesCustomerStories).toBeVisible()
            await expect (navigationPage.navToCyperAIGlossary).toBeVisible()
            await expect (navigationPage.navToDarktraceDefendersCommunity).toBeVisible()
        }

          if (isMobile) {
            // mobile-specific actions
            await page.getByRole('button', { name: 'menu' }).click()
            await expect(page.getByRole('link', { name: 'Get a demo' }).nth(1))
        } else {
            await expect(navigationPage.navToGetADemo).toBeVisible()
        }
   })
})