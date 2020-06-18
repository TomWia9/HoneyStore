import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { NavComponent } from './admin/nav/nav.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { WarehouseManagementComponent } from './admin/warehouse-management/warehouse-management.component';
import { HoneyDetailComponent } from './admin/warehouse-management/honey-detail/honey-detail.component';
import { HoneyStartComponent } from './admin/warehouse-management/honey-start/honey-start.component';
import { CartComponent } from './user/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: NavComponent, children: [
    {path: '', component: DashboardComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'statistics', component: StatisticsComponent},
    {path: 'warehouse', component: WarehouseManagementComponent, children: [
      {path: '', component: HoneyStartComponent},
      {path: 'honey/:index', component: HoneyDetailComponent}
    ]},
  ]},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
