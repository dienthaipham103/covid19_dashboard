import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './../../../../canvasjs.min';
import { CasesBarChartModel, ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  data: CasesBarChartModel[];

  constructor(private chartsServices: ChartsService) { }

  ngOnInit(): void {
    this.chartsServices.getCasesBarChartData().subscribe(data=>{
      this.data = data;

      let chart = new CanvasJS.Chart("barchart", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "20 countries with the most cases"
        },
        data: [{
          type: "column",
          dataPoints: data
        }]
      });
        
      chart.render();
    })

  }

}
