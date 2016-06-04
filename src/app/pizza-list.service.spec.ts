import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PizzaListService } from './pizza-list.service';

describe('PizzaList Service', () => {
  beforeEachProviders(() => [PizzaListService]);

  it('should ...',
      inject([PizzaListService], (service: PizzaListService) => {
    expect(service).toBeTruthy();
  }));
});
