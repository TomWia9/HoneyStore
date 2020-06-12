import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { NavComponent } from './admin/nav/nav.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: NavComponent, children: [
    {path: '', component: DashboardComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'statistics', component: StatisticsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
