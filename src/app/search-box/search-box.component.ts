import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    moduleId: module.id,
    selector:'search-box',
    templateUrl: 'search-box.component.html',
    styleUrls: ['search-box.component.css']
})
export class SearchBoxComponent{
    @Output() update = new EventEmitter();

    ngOnInit(){
        this.update.emit('');
    }
}