export default class BaseMethods {
  constructor (page) {
    this.page = page
  }
  
  async goTo (url) {
    await this.page.goto(url)
  }
  
  async pause () {
    await this.page.pause()
  }

  async waitForTimeout (timeInMs) {
    await this.page.waitForTimeout(timeInMs)
  }

  async getPageTitle () {
    return this.page.title()
  }
  
}
