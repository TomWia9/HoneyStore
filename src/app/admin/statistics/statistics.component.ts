import { Component, OnInit } from '@angular/core';
import { faChartPie, faChartBar, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { StatisticsService } from 'src/app/services/statistics.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  toggle = 'Week';

  faChartPie = faChartPie;
  faChartBar = faChartBar;
  faChartArea = faChartArea;
  pieChartData: any [];
  pieChartLabels: string [];
  barChartData: any [];
  barChartLabels: string [];
  areaChartData: any [];
  areaChartLabels: string [];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.pieChartData = this.statisticsService.getPieChartData();
    this.pieChartLabels = this.statisticsService.getPieChartLabels();
    this.barChartData = this.statisticsService.getBarChartData();
    this.barChartLabels = this.statisticsService.getBarChartLabels();
    this.areaChartData = this.statisticsService.getAreaChartData();
    this.areaChartLabels = this.statisticsService.getAreaChartLabels();
  }

  change(chartID: number, peroid: string){
    console.log('chartID: ' + chartID);
    this.toggle = peroid;
    // switch(chartID) {
    //   case 1: {
    //     this.pieChartData = this.statisticsService.getPieChartDataMonth();
    //     break;
    //  }
    // } it will be implemented when backend will be ready
  }

}
