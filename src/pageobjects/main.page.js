export default class MainPage {
  constructor (page) {
    this.page = page
  
  }
  
  async goMainPage () {
    await this.page.goto('/')
  }
  
}
  
