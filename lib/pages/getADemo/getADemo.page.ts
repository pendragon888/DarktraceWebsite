import { type Locator, type Page} from "playwright"

export class GetADemoPage {
    readonly page: Page
    readonly heading: Locator

    constructor(page:Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'See what Darktrace finds in' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'demo')
    }
}