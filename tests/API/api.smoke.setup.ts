import { test, expect } from "@fixtures/pages.fixture";

test.describe('API smoke testing', async () => {
    test.describe.configure({ retries:1 })
    test('GET landingPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL!, {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET PlatformPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'platform', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET SecureAIPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'products/secure-ai', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET EmailPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'products/email', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET HybridNetworkPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'products/hybrid-network', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET RansomwarePage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/ransomware', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET APTsPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/advanced-persistent-threats', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET InsiderThreatsPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/insider-threat', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET PhishingPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/phishing', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET SupplyChainAttacksPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/supply-chain-attack', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET DataLossPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/data-loss', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET BusinessEmailCompromisePage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/business-email-compromise', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET OurAI', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'cyber-ai', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET CustomersPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'customers', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET IndustryRecognitionPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'why-darktrace/recognition', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET AboutUsPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'company', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET EventsPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'events', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET NewsPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'news', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET LeadershipPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'company/leadership', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET CareersPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'careers', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET ContactUsPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'contact', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET FederalPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'federal', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET TrustCenterPage', async ({ request }) => {
        const response = await request.get('https://trust.darktrace.com/', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET OverviewPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'partners', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET TechnologyPartnersPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'technology-partners', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET PartnerPortalPage', async ({ request }) => {
        const response = await request.get('https://partners.darktrace.com/landing-page', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET MicrosoftPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/microsoft', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET AWSPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'solutions/aws', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET DarktraceBlogPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'blog', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET InsideTheSOCPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'inside-the-soc', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET ResourceLibraryPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'resources', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET CyberAIGlossaryPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'cyber-ai-glossary', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET DarktraceDefendersCommunityPage', async ({ request }) => {
        const response = await request.get('https://community.darktrace.com/private/login', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET GetADemoPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'demo', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET error404Page', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'invalid', {
        })

        expect(response.status()).toBe(404)
        const body = await response.body()
        expect(body).toBeTruthy()
    })
})