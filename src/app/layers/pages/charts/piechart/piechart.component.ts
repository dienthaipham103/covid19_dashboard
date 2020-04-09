import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './../../../../canvasjs.min';
import { CasesPieChartModel, ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  data: CasesPieChartModel[];

  constructor(private chartsServices: ChartsService) { }

  ngOnInit(): void {
    this.chartsServices.getCasesPieChartData().subscribe(data=>{
      this.data = data;

      let chart = new CanvasJS.Chart("piechart", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "10 countries with the most cases"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: this.data
        }]
      });
        
      chart.render();
    })

  }

}
