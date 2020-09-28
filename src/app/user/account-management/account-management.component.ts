import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { UserOrdersTableComponent } from './user-orders-table/user-orders-table.component';
import { Status } from 'src/app/shared/status';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  faTable = faTable;
  tableToggle = 'New';
  clientID: number;
  startComponent = true;
  @ViewChild('dynamicUserOrdersTableComponent', {read: ViewContainerRef, static: false}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private authService: AuthService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.clientID = this.authService.getCurrentUserValue().id;
  }

  onChange(status: number) {
    console.log(status);
    this.startComponent = false;

    if (this.componentRef) {
      this.componentRef.destroy();
     }
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(UserOrdersTableComponent);

    this.componentRef = this.target.createComponent(childComponent);

    switch (status) {
      case 0: {
        this.tableToggle = 'New';
        this.componentRef.instance.status = Status.New;

        break;
      }
      case 1: {
        this.tableToggle = 'Shipped';
        this.componentRef.instance.status = Status.Shipped;

        break;
      }
      case 2: {
        this.tableToggle = 'Delivered';
        this.componentRef.instance.status = Status.Delivered;

        break;
      }
    }

  }

}
