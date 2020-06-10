import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

   SAMPLE_AREACHART_DATA: any[] = [
    { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
  ];

  SAMPLE_AREACHART_LABELS: string[] = ['1', '2', '3', '4', '5', '6', '7'];

   SAMPLE_BARCHART_DATA: any[] = [
    { data: [1231, 2211, 3380, 4481, 5556, 6654, 7730], label: 'Q3 Sales'},
  ];

  SAMPLE_BARCHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];


  constructor() { }

  getAreaChartData(){
    return this.SAMPLE_AREACHART_DATA.slice();
  }

  getAreaChartLabels(){
    return this.SAMPLE_AREACHART_LABELS.slice();
  }

  getBarChartData(){
    return this.SAMPLE_BARCHART_DATA.slice();
  }

  getBarChartLabels(){
    return this.SAMPLE_BARCHART_LABELS.slice();
  }



}
