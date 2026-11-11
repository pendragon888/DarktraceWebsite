import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Ransomware page for Darktrace", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Ransomware page present', async ({ ransomwarePage }) => {
        await ransomwarePage.goto()
        await expect(ransomwarePage.heading).toContainText('Stop ransomware at every stage')
        await expect(ransomwarePage.header).toContainText('Darktrace’s AI reveals and autonomously blocks unusual behavior indicative of a ransomware attack, augmenting human defenders and securing the business.')
   })
})