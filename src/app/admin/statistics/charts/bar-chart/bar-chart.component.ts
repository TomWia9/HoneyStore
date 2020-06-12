import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  @Input() chartData: any [];
  @Input() chartLabels: string [];

  constructor() { }

  public chartType = 'bar';
  public chartLegend = false;
  public chartColors: any[] = [{
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",

  }];
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
};

}
