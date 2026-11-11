import { type Locator, type Page} from "playwright"

export class DarktraceBlogPage {
    readonly page: Page
    readonly heading: Locator
    readonly blogHeader: Locator

    constructor(page:Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Stay ahead of today’s cyber' })
        this.blogHeader = page.locator('#blog-header-5')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'blog')
    }
}