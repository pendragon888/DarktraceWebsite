import { test as setup, expect } from '@fixtures/pages.fixture'
import path from 'path'

setup.describe('Smoke test web application', async () => {
    setup('Verify each page can be accessed', async ({ landingPage, darktracePlatformPage, ransomwarePage, ourAIPage, overviewPage, darktraceBlogPage, getADemoPage, page }) => {
        await page.context().addCookies([{
            name: 'OptanonConsent',
            value: 'isGpcEnabled=0&datestamp=Wed+Nov+11+2026+13%3A59%3A10+GMT%2B0000+(Greenwich+Mean+Time)&version=202607.1.0&browserGpcFlag=0&isDntEnabled=0&isIABGlobal=false&hosts=&consentId=f897310e-33fd-456e-8b47-6c4760785f7e&interactionCount=1&isAnonUser=1&prevHadToken=0&landingPath=NotLandingPage&groups=C0001%3A1%2CC0004%3A0%2CC0003%3A0%2CC0002%3A0&fclco=&lastConsentTs=1794405550&intType=2&crTime=1794405550236',
            domain: '.darktrace.com',
            path: '/',
            httpOnly: false,
            secure: false,
            expires: Math.floor(Date.now() / 1000) + 3600
        },
        {
            name: 'OptanonAlertBoxClosed',
            value: '2026-11-11T13:59:10.023Z',
            domain: '.darktrace.com',
            path: '/',
            httpOnly: false,
            secure: false,
            expires: Math.floor(Date.now() / 1000) + 3600
        }
    ]);

        const authFile = path.join(__dirname, '../../playwright/.auth/cookies.json');
        await landingPage.goto()
        await page.context().storageState({ path: authFile });
        await expect(page).toHaveTitle('Darktrace | The Essential AI Cybersecurity Platform')
        await expect(landingPage.homeBannerMain).toBeVisible()
        await darktracePlatformPage.goto()
        await expect(page).toHaveTitle('ActiveAI Security Platform | Darktrace')
        await expect(darktracePlatformPage.heading).toBeVisible()
        await ransomwarePage.goto()
        await expect(page).toHaveTitle('Ransomware Protection | AI‑Driven Detection, Response & Recovery')
        await expect(ransomwarePage.heading).toBeVisible()
        await ourAIPage.goto()
        await expect(page).toHaveTitle('AI Cybersecurity | A New Approach to AI in Cybersecurity | State of AI | Darktrace')
        await expect(ourAIPage.heading).toBeVisible()
        await overviewPage.goto()
        await expect(page).toHaveTitle('Partners | Darktrace')
        await expect(overviewPage.heading).toBeVisible()
        await darktraceBlogPage.goto()
        await expect(page).toHaveTitle('Blog | Darktrace')
        await expect(darktraceBlogPage.heading).toBeVisible()
        await getADemoPage.goto()
        await expect(page).toHaveTitle('Get a Demo | Darktrace')
        await expect(getADemoPage.heading).toBeVisible()
    })
})