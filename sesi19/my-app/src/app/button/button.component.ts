import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  //parentName = '';
  @Input()message = '';
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() clickAddHandler = new EventEmitter();
  @Output() clickDecHandler = new EventEmitter();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  buttonAddClick() {
    this.clickAddHandler.emit();
  }

  buttonDecClick() {
    this.clickDecHandler.emit();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
