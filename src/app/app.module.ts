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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AreaChartComponent } from './admin/statistics/charts/area-chart/area-chart.component';
import { BarChartComponent } from './admin/statistics/charts/bar-chart/bar-chart.component';
import { HoneyModalComponent } from './admin/honey-modal/honey-modal.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { OrdersTableComponent } from './admin/data-tables/orders-table/orders-table.component';
import { AllOrdersTableComponent } from './admin/data-tables/all-orders-table/all-orders-table.component';
import { OrderModalComponent } from './admin/order-modal/order-modal.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { HoneyCardsComponent } from './admin/dashboard/honey-cards/honey-cards.component';
import { PieChartComponent } from './admin/statistics/charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    AllOrdersTableComponent,
    AreaChartComponent,
    BarChartComponent,
    HoneyCardsComponent,
    HoneyModalComponent,
    OrdersComponent,
    OrdersTableComponent,
    OrderModalComponent,
    StatisticsComponent,
    PieChartComponent,
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
