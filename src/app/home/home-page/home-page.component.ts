import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  switchOn: Boolean = false;
  disableBecauseFlyMode: boolean = false;
  backup: boolean[];
  items = [
    { name: 'Modalità aereo', isOn: false },
    { name: 'Connessione dati', isOn: false },
    { name: 'WiFi', isOn: false },
  ];

  switch = () =>
    this.items
      .filter(({ name }) => name !== 'Modalità aereo')
      .forEach((item) => (item.isOn = !this.switchOn));

  switchAllBecauseFlyMode = (ev: boolean) => {
    this.disableBecauseFlyMode = ev;
    
    if (ev) return this.setFlyMode();
    else return this.unsetFlyMode();
  };

  updateChildren = (ev: { name: String; isOn: boolean }) => {
    this.items.find((item) => item.name === ev.name).isOn = ev.isOn;
    this.areAllSwitched();
  };

  setFlyMode = () => {
    this.backup = this.items
      .filter(({ name }) => name !== 'Modalità aereo')
      .map((item) => item.isOn);
    this.items
      .filter(({ name }) => name !== 'Modalità aereo')
      .forEach((item) => (item.isOn = false));
  };

  unsetFlyMode = () => {
    this.items
      .filter(({ name }) => name !== 'Modalità aereo')
      .forEach((item, i) => (item.isOn = this.backup[i]));
  };

  areAllSwitched = () => {
    if (
      this.items
        .filter(({ name }) => name !== 'Modalità aereo')
        .every(({ isOn }) => isOn === true)
    ) {
      return (this.switchOn = true);
    }
    return (this.switchOn = false);
  };

  ngOnInit() {}
}
