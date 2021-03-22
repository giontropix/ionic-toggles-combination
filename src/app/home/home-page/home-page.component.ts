import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  isOn: Boolean = false;
  haveToSwitchBecauseFlyMode: Boolean = false;
  items = [
    { name: 'Modalità aereo', isOn: false },
    { name: 'Connessione dati', isOn: false },
    { name: 'WiFi', isOn: false },
  ];

  switchAll = (ev: Boolean) => (this.haveToSwitchBecauseFlyMode = ev);

  ngOnInit() {}
}
