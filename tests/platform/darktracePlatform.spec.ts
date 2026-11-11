import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Darktrace Behavioral Defense Platform page for Darktrace", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Darktrace Behavioral Defense Platform page present', async ({ darktracePlatformPage }) => {
        await darktracePlatformPage.goto()
        await expect(darktracePlatformPage.heading).toContainText('Secure the modern enterprise in the AI era')
        await expect(darktracePlatformPage.heroScrim).toContainText('Unified visibility, continuous behavioral monitoring, and autonomous response across your entire enterprise – so you can secure AI, people and infrastructure in real time.');
    })
})