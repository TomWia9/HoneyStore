import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { faChartPie, faChartBar, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { ChartData } from 'chart.js';
import { Observable } from 'rxjs';
import { StatisticsService } from 'src/app/services/statistics.service';
import { NumberOfOrdersData } from 'src/app/shared/numberOfOrdersData';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  areaChartToggle = 'Week';
  barChartToggle = 'Week';
  pieChartToggle = 'Week';

  faChartPie = faChartPie;
  faChartBar = faChartBar;
  faChartArea = faChartArea;
  @ViewChild('dynamicPieChartComponent', {read: ViewContainerRef, static: false}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  @ViewChild('dynamicBarChartComponent', {read: ViewContainerRef, static: false}) target1: ViewContainerRef;
  private componentRef1: ComponentRef<any>;
  @ViewChild('dynamicAreaChartComponent', {read: ViewContainerRef, static: false}) target2: ViewContainerRef;
  private componentRef2: ComponentRef<any>;

  constructor(private statisticsService: StatisticsService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.createPieChart(30);
    this.createBarChart(30);
    this.createAreaChart(30);

  }

  change(chartID: number, peroid: string) {
    const peroidNumber = this.getPeroidNumber(peroid);

    switch (chartID) {
      case 1: {
        this.pieChartToggle = peroid;
        this.createPieChart(peroidNumber);
        break;
      }
      case 2: {
        this.barChartToggle = peroid;
        this.createBarChart(peroidNumber);
        break;
      }
      case 3: {
        this.areaChartToggle = peroid;
        this.createAreaChart(peroidNumber);
        break;
      }
    }
  }

  getPeroidNumber(peroid: string) {
    switch (peroid) {
      case 'Week': return 7;
      case 'Month': return 30;
      case 'Year': return 365;
    }
  }

  createPieChart(peroid: number) {
    this.statisticsService.getNumberOfSpecyficOrdersData(peroid).subscribe(x => {
      if (this.componentRef) {
        this.componentRef.destroy();
       }
      const childComponent = this.componentFactoryResolver.resolveComponentFactory(PieChartComponent);
      this.componentRef = this.target.createComponent(childComponent);
      this.componentRef.instance.data = x.body.data;
      this.componentRef.instance.labels = x.body.labels;
    });

  }

  createBarChart(peroid: number) {
    this.statisticsService.getChartData(peroid).subscribe(x => {
      if (this.componentRef1) {
        this.componentRef1.destroy();
       }
      const childComponent = this.componentFactoryResolver.resolveComponentFactory(BarChartComponent);
      this.componentRef1 = this.target1.createComponent(childComponent);
      this.componentRef1.instance.data = x.body.data;
      this.componentRef1.instance.labels = x.body.labels;
    });

  }

  createAreaChart(peroid: number) {
    this.statisticsService.getChartData(peroid).subscribe(x => {
    if (this.componentRef2) {
      this.componentRef2.destroy();
     }
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(AreaChartComponent);
    this.componentRef2 = this.target2.createComponent(childComponent);
    this.componentRef2.instance.data = x.body.data;
    this.componentRef2.instance.labels = x.body.labels;
  });

}
}
