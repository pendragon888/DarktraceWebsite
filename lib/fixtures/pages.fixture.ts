import { LandingPage } from "@pages/landing/landing.page"
import { Error404Page } from "@pages/landing/error404.page"
import { test as baseTest } from "@playwright/test"

type MyPages = {
    landingPage: LandingPage
    error404Page: Error404Page
}

export const test = baseTest.extend<MyPages>({
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page))
    },
    error404Page: async ({ page }, use) => {
    await use(new Error404Page(page))
    },
})

export { expect } from "@playwright/test"