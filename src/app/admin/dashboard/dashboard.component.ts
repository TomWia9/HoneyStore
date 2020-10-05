import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {  faChartBar, faChartArea  } from '@fortawesome/free-solid-svg-icons';
import { StatisticsService } from 'src/app/services/statistics.service';
import { AreaChartComponent } from '../statistics/charts/area-chart/area-chart.component';
import { BarChartComponent } from '../statistics/charts/bar-chart/bar-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('dynamicBarChartComponent', {read: ViewContainerRef, static: false}) target1: ViewContainerRef;
  private componentRef1: ComponentRef<any>;
  @ViewChild('dynamicAreaChartComponent', {read: ViewContainerRef, static: false}) target2: ViewContainerRef;
  private componentRef2: ComponentRef<any>;
  faChartBar = faChartBar;
  faChartArea = faChartArea;

  constructor(private statisticsService: StatisticsService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.createBarChart(30);
    this.createAreaChart(30);
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