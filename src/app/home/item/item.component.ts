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

  @Input() isOn: Boolean;
  @Input() dataValue: { name: String; isOn: Boolean };
  @Input() haveToSwitchBecauseFlyMode: Boolean;
  @Output() emit: EventEmitter<Boolean> = new EventEmitter();
  @Output() emitItself: EventEmitter<any> = new EventEmitter(true);

  inputField: String;
  isFlyMode: Boolean = false;
  isOnBackUp: Boolean;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOn && this.dataValue.name !== 'Modalità aereo') {
      this.dataValue.isOn = this.isOn;
      this.inputField = '';
    } else if (
      changes.haveToSwitchBecauseFlyMode &&
      this.dataValue.name !== 'Modalità aereo' &&
      changes.haveToSwitchBecauseFlyMode.currentValue === true
    ) {
      this.isOnBackUp = this.dataValue.isOn;
      this.dataValue.isOn = false;
    } else if (
      changes.haveToSwitchBecauseFlyMode &&
      this.dataValue.name !== 'Modalità aereo' &&
      changes.haveToSwitchBecauseFlyMode.currentValue === false
    )
      this.dataValue.isOn = this.isOnBackUp;
  }

  switchForFlyMode = () => {
    if (this.dataValue.name === 'Modalità aereo') {
      this.isFlyMode = !this.isFlyMode;
      this.emit.emit(this.isFlyMode);
    }
  };

  sendItselfToParent = () => {
    if (this.dataValue.name !== 'Modalità aereo') {
      this.emitItself.emit(this.dataValue);
    }
  };
}
