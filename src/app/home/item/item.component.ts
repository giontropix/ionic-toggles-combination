import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() dataValue: { name: String; isOn: Boolean };
  @Input() disableBecauseFlyMode: Boolean;
  @Output() emit: EventEmitter<boolean> = new EventEmitter(true);
  @Output() emitItself: EventEmitter<any> = new EventEmitter(true);

  inputField: String;
  isFlyMode = false;
  isOnBackUp: Boolean;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOn && this.dataValue.name !== 'Modalità aereo') {
      this.inputField = '';
    }
  }

  switchForFlyMode = () => {
    if (this.dataValue.name === 'Modalità aereo') {
      this.isFlyMode = !this.isFlyMode;
      this.emit.emit(this.isFlyMode);
    }
  };

  sendChildToParentToUpdateGeneralButton = () => {
    if (this.dataValue.name !== 'Modalità aereo') {
      this.emitItself.emit(this.dataValue);
    }
  };
}
