import { type Locator, type Page} from "playwright"

export class OverviewPage {
    readonly page: Page
    readonly heading: Locator
    readonly header: Locator

    constructor(page:Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Better Together' })
        this.header = page.locator('header')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'partners')
    }
}