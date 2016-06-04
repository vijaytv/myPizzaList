import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyPizzaListAppComponent } from '../app/my-pizza-list.component';

beforeEachProviders(() => [MyPizzaListAppComponent]);

describe('App: MyPizzaList', () => {
  it('should create the app',
      inject([MyPizzaListAppComponent], (app: MyPizzaListAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-pizza-list works!\'',
      inject([MyPizzaListAppComponent], (app: MyPizzaListAppComponent) => {
    expect(app.title).toEqual('my-pizza-list works!');
  }));
});
