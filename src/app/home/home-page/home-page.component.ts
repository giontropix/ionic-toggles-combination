import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  isOn: Boolean = false;
  switchOn: Boolean = false;
  haveToSwitchBecauseFlyMode: Boolean = false;
  items = [
    { name: 'Modalità aereo', isOn: false },
    { name: 'Connessione dati', isOn: false },
    { name: 'WiFi', isOn: false },
  ];

  switchAll = (ev: Boolean) => {
    this.haveToSwitchBecauseFlyMode = ev;
    this.switchOn = !this.switchOn
  };

  updateChildren = (ev: { name: String; isOn: boolean }) => {
    this.items.find((item) => item.name === ev.name).isOn = ev.isOn;
    this.areAllSwitched();
  };

  areAllSwitched = () => {
    const filtered = this.items.filter(({ name }) => name !== 'Modalità aereo');
    console.log(filtered);
    if (filtered.every(({ isOn }) => isOn === true))
      return (this.switchOn = true);
    return (this.switchOn = false);
  };

  ngOnInit() {}
}
