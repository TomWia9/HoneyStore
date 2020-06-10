import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './admin/nav/nav.component';
import { HomeComponent } from './user/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DataTableComponent } from './admin/data-table/data-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AreaChartComponent } from './admin/statistics/charts/area-chart/area-chart.component';
import { BarChartComponent } from './admin/statistics/charts/bar-chart/bar-chart.component';
import { HoneyCardsComponent } from './admin/statistics/honey-cards/honey-cards.component';
import { HoneyModalComponent } from './admin/honey-modal/honey-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    DataTableComponent,
    AreaChartComponent,
    BarChartComponent,
    HoneyCardsComponent,
    HoneyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
