import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  @Input() chartData: any [];
  @Input() chartLabels: string [];

  constructor() { }

  public chartType = 'line';
  public chartLegend = false;
  public chartColors: any[] = [{
      backgroundColor: 'rgba(2,117,216,0.2)',
      borderColor: 'rgba(2,117,216,1)',

  }];
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0, 0, 0, .125)',
        }
      }]
  },
  elements:
  {
      point:
      {
          radius: 5,
      }
  }

};

}
