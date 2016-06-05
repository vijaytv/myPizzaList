import { Component,OnInit,Input } from '@angular/core';
import {Pizzeria} from './pizzeria/pizzeria';
import {PizzaListService}  from './pizza-list.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Search } from './search.pipe';
import { SearchBoxComponent } from './search-box/search-box.component';
@Component({
  moduleId: module.id,
  pipes: [ Search],
  directives: [SearchBoxComponent],
  selector: 'my-pizza-list-app',
  templateUrl: 'my-pizza-list.component.html',
  styleUrls: ['my-pizza-list.component.css'],
  providers: [HTTP_PROVIDERS,PizzaListService]
  
})
export class MyPizzaListAppComponent implements OnInit{
  
  @Input() term; 
  pizzerias: Pizzeria[];
  error: any;
  constructor(private pizzaService: PizzaListService) {}
  getPizzerias(){
      this.pizzaService.getPizzerias()
      .subscribe(
        pizzerias => this.pizzerias = pizzerias,
        error =>  this.error = <any>error
    );
    
  }
  
  ngOnInit() {
    this.getPizzerias();
  }
  
}
