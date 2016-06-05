import { Injectable } from '@angular/core';
import {Pizzeria} from './pizzeria/pizzeria';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class PizzaListService {

  constructor(private _http: Http) {}

  private pizzeriasUrl = '/app/PizzeriaInventory.json';  // URL to JSON file for now
  
  getPizzerias() {
    return this._http.get(this.pizzeriasUrl)
      .map((response: Response) => <Pizzeria[]>response.json().data)
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}
