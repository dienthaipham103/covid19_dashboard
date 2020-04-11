import { Injectable } from '@angular/core';

// number with comma
function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  name: string = 'dien';

  constructor() { }

  makeCapitalTooltip(name: string, cases: number, deaths: number, recovered: number): string {
    cases = numberWithCommas(cases);
    deaths = numberWithCommas(deaths);
    recovered = numberWithCommas(recovered);

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
