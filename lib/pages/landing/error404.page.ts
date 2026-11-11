import { type Locator, type Page} from "playwright"

export class Error404Page {
    readonly page: Page
    readonly main: Locator
    readonly homepageLink: Locator
    readonly resourcesLink: Locator

    constructor(page:Page) {
        this.page = page
        this.main = page.getByRole('heading', { name: 'Error 404' })
        this.homepageLink  = page.getByRole('link', { name: 'Homepage', exact: true })
        this.resourcesLink = page.getByRole('link', { name: 'Resources' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'invalid')
    }
}