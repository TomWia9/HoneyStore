import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { CartDetailsComponent } from '../cart/cart-details/cart-details.component';
@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  isLoggedIn: boolean;
  @ViewChild('dynamicCartDetailsComponent', {read: ViewContainerRef, static: false}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private authService: AuthService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
     this.isLoggedIn = x !== null;
   });
  }

  onAddComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
     }
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(CartDetailsComponent);
    this.componentRef = this.target.createComponent(childComponent);
    this.componentRef.instance.mini = true;

  }


}
