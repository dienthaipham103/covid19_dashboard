import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartsService, Linechart00_model } from 'src/app/services/charts.service';

@Component({
  selector: 'app-linechart00',
  templateUrl: './linechart00.component.html',
  styleUrls: ['./linechart00.component.scss']
})
export class Linechart00Component implements OnInit {
  chart = [];
  data;

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.chartsService.getLineChart00_data().subscribe(data=>{
      this.data = data;
      this.data['date'] = data['date'].map(x => new Date(x));

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels:  this.data['date'],
          datasets: [
            {
              data: this.data['cases'],
              borderColor: 'gray',
              label: "Cases",
              fill: false
            },
            {
              data: this.data['recovered'],
              borderColor: 'green',
              label: "Recovered",
              fill: false
            },
            {
              data: this.data['deaths'],
              borderColor: 'red',
              label: "Deaths",
              fill: false
            }
          ]
        },
        options: {
          tooltips: {
            mode: 'label',
            label: 'mylabel',
            callbacks: {
                label: function(tooltipItem, data) {
                    return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
          },
          legend: {
            display: true,
            // fullWidth: true,
            // labels: {
            //   fontSize: 11
            // },
            // position: 'left'
          },
  
          scales: {
            xAxes: [{
              gridLines:{
                display: false
              },
              display: true,
              type: 'time',
              time: {
                tooltipFormat: 'll',
                parser: 'D/M/YY',
                unit: 'day',
                unitStepSize: 1,
                displayFormats: {
                  'day': 'D/M/YY'
                }
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Number'
              },
              ticks: {
                beginAtZero:true,
                userCallback: function(value, index, values) {
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
                    return value;
                }
              }
            }]
          },
  
          title: {
            display: true,
            text: 'Cumulative number of cases, deaths and recovered in the world'
          }
        }
  
      })
    })

  }

}
