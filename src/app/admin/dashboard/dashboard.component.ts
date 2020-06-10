import { Component, OnInit } from '@angular/core';
import {  faChartBar, faChartArea  } from '@fortawesome/free-solid-svg-icons';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faChartBar = faChartBar;
  faChartArea = faChartArea;
  areaChartData: any [];
  areaChartLabels: string [];
  barChartData: any [];
  barChartLabels: string [];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.areaChartData = this.statisticsService.getAreaChartData();
    this.areaChartLabels = this.statisticsService.getAreaChartLabels();
    this.barChartData = this.statisticsService.getBarChartData();
    this.barChartLabels = this.statisticsService.getBarChartLabels();
  }

}
