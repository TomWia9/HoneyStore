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
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { PieChartComponent } from './admin/statistics/charts/pie-chart/pie-chart.component';
import { WarehouseManagementComponent } from './admin/warehouse-management/warehouse-management.component';
import { HoneyDetailComponent } from './admin/warehouse-management/honey-detail/honey-detail.component';
import { HoneyStartComponent } from './admin/warehouse-management/honey-start/honey-start.component';
import { HoneyListComponent } from './admin/warehouse-management/honey-list/honey-list.component';
import { HoneyAddModalComponent } from './admin/warehouse-management/honey-add-modal/honey-add-modal.component';
import { NavHomeComponent } from './user/nav-home/nav-home.component';
import { HoneyCardsComponent } from './admin/honey-cards/honey-cards.component';
import { HoneyItemsComponent } from './user/honey-items/honey-items.component';
import { CartComponent } from './user/cart/cart.component';
import { CartDetailsComponent } from './user/cart/cart-details/cart-details.component';
import { PaymentComponent } from './user/cart/payment/payment.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ThanksForOrderComponent } from './user/thanks-for-order/thanks-for-order.component';
import { AccountManagementComponent } from './user/account-management/account-management.component';
import { UserOrdersTableComponent } from './user/account-management/user-orders-table/user-orders-table.component';
import { OrderModalComponent } from './shared/order-modal/order-modal.component';
import { SettingsComponent } from './user/account-management/settings/settings.component';
import { ChangeAddressModalComponent } from './user/change-address-modal/change-address-modal.component';
import { UploadComponent } from './upload/upload.component';
import { HoneyItemCardComponent } from './user/honey-items/honey-item-card/honey-item-card.component';

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
    WarehouseManagementComponent,
    HoneyDetailComponent,
    HoneyStartComponent,
    HoneyListComponent,
    HoneyAddModalComponent,
    NavHomeComponent,
    HoneyItemsComponent,
    CartComponent,
    CartDetailsComponent,
    PaymentComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ErrorPageComponent,
    ThanksForOrderComponent,
    AccountManagementComponent,
    UserOrdersTableComponent,
    SettingsComponent,
    ChangeAddressModalComponent,
    UploadComponent,
    HoneyItemCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
