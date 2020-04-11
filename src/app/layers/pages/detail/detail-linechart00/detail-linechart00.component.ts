import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-detail-linechart00',
  templateUrl: './detail-linechart00.component.html',
  styleUrls: ['./detail-linechart00.component.scss']
})
export class DetailLinechart00Component implements OnInit {
  @Input()
  country: string;
  
  chart = [];
  data;

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.detailService.getDetailLinechart00_data(this.country).subscribe(data=>{
      this.data = data;
      this.data['date'] = data['date'].map(x => new Date(x));

      this.chart = new Chart('canvas_0', {
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
            text: 'Cumulative number of cases, deaths and recovered in ' + this.country
          }
        }
  
      })
    })
  }

}
