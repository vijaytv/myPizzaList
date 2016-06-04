import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PizzeriasListComponent } from './pizzerias-list.component';

describe('Component: PizzeriasList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PizzeriasListComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PizzeriasListComponent],
      (component: PizzeriasListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PizzeriasListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PizzeriasListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-pizzerias-list></app-pizzerias-list>
  `,
  directives: [PizzeriasListComponent]
})
class PizzeriasListComponentTestController {
}

