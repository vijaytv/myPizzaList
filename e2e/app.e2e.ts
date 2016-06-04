import { MyPizzaListPage } from './app.po';

describe('my-pizza-list App', function() {
  let page: MyPizzaListPage;

  beforeEach(() => {
    page = new MyPizzaListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('my-pizza-list works!');
  });
});
