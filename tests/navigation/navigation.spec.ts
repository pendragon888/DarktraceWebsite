import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Darktrace and view navigation", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Landing page present', async ({ landingPage, navigationPage }) => {
        await landingPage.goto()
        await expect (landingPage.homeBannerMain).toBeVisible()

        await navigationPage.navToPlatform.hover()
        await expect (navigationPage.navToDarktracePlatform).toBeVisible()
        await expect (navigationPage.navToSecureAI).toBeVisible()
        await expect (navigationPage.navToEmail).toBeVisible()
        await expect (navigationPage.navToHybridNetwork).toBeVisible()
        await expect (navigationPage.navToAdaptiveAI).toBeVisible()

        await navigationPage.navToSolutions.hover()
        await expect (navigationPage.navToRansomware).toBeVisible()
        await expect (navigationPage.navToAccountTakeover).toBeVisible()
        await expect (navigationPage.navToCustomerStories).toBeVisible()
        await expect (navigationPage.navToInsideTheSOC).toBeVisible()

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

        await navigationPage.navToPartners.hover()
        await expect (navigationPage.navToOverview).toBeVisible()
        await expect (navigationPage.navToTechnologyPartners).toBeVisible()
        await expect (navigationPage.navToPartnerPortal).toBeVisible()
        await expect (navigationPage.navToMicrosoft).toBeVisible()
        await expect (navigationPage.navToAWS).toBeVisible()

        await navigationPage.navToResources.hover()
        await expect (navigationPage.navToDarktraceBlog).toBeVisible()
        await expect (navigationPage.navToReourcesInsideTheSOC).toBeVisible()
        await expect (navigationPage.navToResourceLibrary).toBeVisible()
        await expect (navigationPage.navToReourcesCustomerStories).toBeVisible()
        await expect (navigationPage.navToCyperAIGlossary).toBeVisible()
        await expect (navigationPage.navToDarktraceDefendersCommunity).toBeVisible()

        await expect(navigationPage.navToGetADemo).toBeVisible()
   })
})