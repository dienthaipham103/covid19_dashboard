import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-linechart01',
  templateUrl: './linechart01.component.html',
  styleUrls: ['./linechart01.component.scss']
})
export class Linechart01Component implements OnInit {
  chart = [];
  data;

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.chartsService.getLineChart01_data().subscribe(data=>{
      this.data = data
      this.data['date'] = data['date'].map(x => new Date(x));

      this.chart = new Chart('canvas6', {
        type: 'line',
        data: {
          labels:  this.data['date'],
          datasets: [
            {
              data: this.data['recovered_rate'],
              borderColor: 'green',
              label: "Recovered Rate",
              fill: false
            },
            {
              data: this.data['death_rate'],
              borderColor: 'red',
              label: "Death Rate",
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
                labelString: 'Rate (%)'
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
            text: 'Change of death rate and recovered rate'
          }
        }
  
      })
    })


  }

}
