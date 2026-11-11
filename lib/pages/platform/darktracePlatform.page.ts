import { type Locator, type Page} from "playwright"

export class DarktracePlatformPage {
    readonly page: Page
    readonly heading: Locator
    readonly heroScrim: Locator

    constructor(page:Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Secure the modern enterprise' })
        this.heroScrim = page.locator('#hero-scrim')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'platform')
    }
}