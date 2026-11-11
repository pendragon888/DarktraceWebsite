import { type Locator, type Page} from "playwright"

export class OurAIPage {
    readonly page: Page
    readonly heading: Locator
    readonly h1: Locator
    readonly body: Locator

    constructor(page:Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Adaptive AI: Our proprietary' })
        this.h1 = page.locator('h1')
        this.body = page.locator('body')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'cyber-ai')
    }
}