import { Component } from '@angular/core';
import { PizzaListService } from './pizza-list.service';

@Component({
  moduleId: module.id,
  selector: 'my-pizza-list-app',
  templateUrl: 'my-pizza-list.component.html',
  styleUrls: ['my-pizza-list.component.css']
})
export class MyPizzaListAppComponent {
  title = 'my-pizza-list works!';
}
