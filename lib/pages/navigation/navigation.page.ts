import { type Locator, type Page } from "playwright"

export class NavigationPage {
    readonly page: Page
    readonly pageTitle: Locator
    readonly navToLanding: Locator
    readonly navToPlatform: Locator
    readonly navToSolutions: Locator
    readonly navToWhyDarktrace: Locator
    readonly navToPartners: Locator
    readonly navToResources: Locator
    readonly navToGetADemo: Locator

    //Platform submenu
    readonly navToDarktracePlatform: Locator
    readonly navToSecureAI: Locator
    readonly navToEmail: Locator
    readonly navToHybridNetwork: Locator
    readonly navToAdaptiveAI: Locator

    //Solutions submenu
    readonly navToRansomware: Locator
    readonly navToAccountTakeover: Locator
    readonly navToCustomerStories: Locator
    readonly navToInsideTheSOC: Locator

    //Why Darktrace submenu
    readonly navToOurAI: Locator
    readonly navToOurCustomers: Locator
    readonly navToIndustryRecognition: Locator
    readonly navToAboutUs: Locator
    readonly navToEvents: Locator
    readonly navToNews: Locator
    readonly navToLeadership: Locator
    readonly navToCareers: Locator
    readonly navToFederal: Locator
    readonly navToTrustCenter: Locator
    readonly navToDarktraceLive: Locator

    //Partners submenu
    readonly navToOverview: Locator
    readonly navToTechnologyPartners: Locator
    readonly navToPartnerPortal: Locator
    readonly navToMicrosoft: Locator
    readonly navToAWS: Locator

    //Resources submenu
    readonly navToDarktraceBlog: Locator
    readonly navToReourcesInsideTheSOC: Locator
    readonly navToResourceLibrary: Locator
    readonly navToReourcesCustomerStories: Locator
    readonly navToCyperAIGlossary: Locator
    readonly navToDarktraceDefendersCommunity: Locator


    constructor(page: Page) {
        this.page = page
        this.pageTitle = page.getByTestId('page-title')
        this.navToLanding = page.getByRole('navigation').getByRole('link', { name: 'Darktrace homepage' })
        this.navToPlatform = page.getByRole('button', { name: 'Platform' })
        this.navToSolutions = page.getByRole('button', { name: 'Solutions' })
        this.navToWhyDarktrace = page.getByRole('button', { name: 'Why Darktrace' })
        this.navToPartners = page.getByRole('button', { name: 'Partners' })
        this.navToResources = page.getByRole('button', { name: 'Resources' })
        this.navToGetADemo = page.getByRole('navigation').getByRole('link', { name: 'Get a demo' })

        //Platform submenu
        this.navToDarktracePlatform = page.getByRole('link', { name: 'Darktrace Behavioral Defense Platform™' })
        this.navToSecureAI = page.getByRole('navigation', { name: 'Platform' }).getByRole('link', { name: '/ SECURE AI' })
        this.navToEmail = page.getByRole('navigation', { name: 'Platform' }).getByRole('link', { name: '/ EMAIL' })
        this.navToHybridNetwork = page.getByRole('navigation', { name: 'Platform' }).getByRole('link', { name: '/ HYBRID NETWORK' })
        this.navToAdaptiveAI = page.getByRole('link', { name: 'Adaptive AI' })

        //Solutions submenu
        this.navToRansomware = page.getByRole('link', { name: 'Ransomware' })
        this.navToAccountTakeover = page.getByRole('link', { name: 'Account Takeover' })
        this.navToCustomerStories = page.getByRole('link', { name: 'Customer stories See how we' })
        this.navToInsideTheSOC = page.getByRole('link', { name: 'Inside the SOC Technical deep' })

        //Why Darktrace submenu
        this.navToOurAI = page.getByRole('link', { name: 'Our AI', exact: true })
        this.navToOurCustomers = page.getByRole('link', { name: 'Our Customers' })
        this.navToIndustryRecognition = page.getByRole('link', { name: 'Industry Recognition' })
        this.navToAboutUs = page.getByRole('navigation', { name: 'Why Darktrace' }).getByRole('link', { name: 'About Us' })
        this.navToEvents = page.getByRole('navigation', { name: 'Why Darktrace' }).getByRole('link', { name: 'Events' })
        this.navToNews = page.getByRole('navigation', { name: 'Why Darktrace' }).getByRole('link', { name: 'News' })
        this.navToLeadership = page.getByRole('navigation', { name: 'Why Darktrace' }).getByRole('link', { name: 'Leadership' })
        this.navToCareers = page.getByRole('navigation', { name: 'Why Darktrace' }).getByRole('link', { name: 'Careers' })
        this.navToFederal = page.getByRole('link', { name: 'Federal', exact: true })
        this.navToTrustCenter = page.getByRole('navigation', { name: 'Why Darktrace' }).getByRole('link', { name: 'Trust Center' })
        this.navToDarktraceLive = page.getByRole('link', { name: 'Darktrace LIVE: Secure AI,' })

        //Partners submenu
        this.navToOverview = page.getByRole('link', { name: 'Overview' })
        this.navToTechnologyPartners = page.getByRole('link', { name: 'Technology Partners' })
        this.navToPartnerPortal = page.getByRole('navigation', { name: 'Partners' }).getByRole('link', { name: 'Partner Portal' })
        this.navToMicrosoft = page.getByRole('link', { name: 'Microsoft' })
        this.navToAWS = page.getByRole('link', { name: 'AWS' })

        //Resources submenu
        this.navToDarktraceBlog = page.getByRole('link', { name: 'The Darktrace Blog Latest' })
        this.navToReourcesInsideTheSOC = page.getByRole('link', { name: 'Inside the SOC Real threats' })
        this.navToResourceLibrary = page.getByRole('link', { name: 'Resource Library Threat' })
        this.navToReourcesCustomerStories = page.getByRole('link', { name: 'Customer Stories 10,000' })
        this.navToCyperAIGlossary = page.getByRole('link', { name: 'Cyber AI Glossary An A-Z of' })
        this.navToDarktraceDefendersCommunity = page.getByRole('link', { name: 'Darktrace Defenders Community' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }
}