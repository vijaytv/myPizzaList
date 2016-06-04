export class MyPizzaListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-pizza-list-app h1')).getText();
  }
}
