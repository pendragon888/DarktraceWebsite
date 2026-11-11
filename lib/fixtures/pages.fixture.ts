import { LandingPage } from "@pages/landing/landing.page"
import { NavigationPage } from "@pages/navigation/navigation.page"
import { DarktracePlatformPage } from "@pages/platform/darktracePlatform.page"
import { RansomwarePage } from "@pages/solutions/ransomware.page"
import { OurAIPage } from "@pages/whyDarktrace/ourAI.page"
import { OverviewPage } from "@pages/partners/overview.page"
import { Error404Page } from "@pages/landing/error404.page"
import { test as baseTest } from "@playwright/test"

type MyPages = {
    landingPage: LandingPage
    navigationPage: NavigationPage
    darktracePlatformPage: DarktracePlatformPage
    ransomwarePage: RansomwarePage
    ourAIPage: OurAIPage
    overviewPage: OverviewPage
    error404Page: Error404Page
}

export const test = baseTest.extend<MyPages>({
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page))
    },
    navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page))
    },
    darktracePlatformPage: async ({ page }, use) => {
    await use(new DarktracePlatformPage(page))
    },
    ransomwarePage: async ({ page }, use) => {
    await use(new RansomwarePage(page))
    },
    ourAIPage: async ({ page }, use) => {
    await use(new OurAIPage(page))
    },
    overviewPage: async ({ page }, use) => {
    await use(new OverviewPage(page))
    },
    error404Page: async ({ page }, use) => {
    await use(new Error404Page(page))
    },
})

export { expect } from "@playwright/test"