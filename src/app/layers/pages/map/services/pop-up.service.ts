import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  name: string = 'dien';

  constructor() { }

  makeCapitalTooltip(name: string, cases: number, deaths: number, recovered: number): string {
    // let x = toString(cases);
    return `
    <p style="text-align: center;font-size:110%;font-weight:bold;">${name}</p>
    <hr>
    <ul>
      <li style="color: gray;">Cases: ${cases}</li>
      <li style="color: red;">Deaths: ${deaths}</li>
      <li style="color: green;">Recovered: ${recovered}</li>
    </ul>
    `
  }
}
