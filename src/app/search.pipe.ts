import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {

transform(value:any[], args:string):any {
 
        if (typeof value === 'object') {
            var resultArray = [];
 
            if (args.length === 0) {
                for (let item of value) {
                    resultArray.push(item);
                }
            }
            else {
                console.log(args);
                for (let item of value) {
                    if (item.name.toLowerCase().indexOf( args.toLowerCase())>=0 || (item.style.toLowerCase().indexOf( args.toLowerCase()) >=0 )) {
                        resultArray.push(item);
                    }
                }
            }
            return resultArray;
        }
 
    }

}
