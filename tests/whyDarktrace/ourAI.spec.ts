import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Our AI page for Darktrace", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Our AI page present', async ({ ourAIPage }) => {
        await ourAIPage.goto()
        await expect(ourAIPage.heading).toBeVisible()
        await expect(ourAIPage.h1).toContainText('Adaptive AI: Our proprietary AI technology')
        await expect(ourAIPage.body).toContainText('Darktrace applies a unique combination of AI techniques to build a continuously evolving understanding of your organization, helping security teams see activity in context, uncover threats others miss, and respond with speed and precision across AI, users, and infrastructure.')
    })
})