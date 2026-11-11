import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Darktrace Blog page for Darktrace", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Darktrace Blog page present', async ({ darktraceBlogPage }) => {
        await darktraceBlogPage.goto()
        await expect(darktraceBlogPage.heading).toBeVisible()
        await expect(darktraceBlogPage.blogHeader).toContainText('Stay ahead of today’s cyber threats')
        await expect(darktraceBlogPage.blogHeader).toContainText('Expert insights and practical guidance to help you strengthen your organization’s cybersecurity in the modern era.')
    })
})