import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  @Input() chartData: any [];
  @Input() chartLabels: string [];

  colors: any[] = [
    {
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }
  ];

  chartType = 'pie';

  constructor() { }
}
