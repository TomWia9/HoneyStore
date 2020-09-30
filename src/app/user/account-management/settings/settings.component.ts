import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Address } from 'src/app/shared/address';
import { ChangeAddressModalComponent } from '../../change-address-modal/change-address-modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  faCogs = faCogs;
  userId: number;
  address = new Address();
  newAddress: Observable<Address>;
  constructor(private userService: UsersService, private authService: AuthService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userId = this.authService.getCurrentUserValue().id;
    this.getClientAddress();

  }

  onChangeAddress() {
    const modalRef = this.modalService.open(ChangeAddressModalComponent, { size: 'xl', scrollable: true });
    modalRef.componentInstance.userId = this.userId;
  }

  getClientAddress(){
    this.userService.GetClientAddress(this.userId).subscribe(x => {
      this.address = x.body;
      console.log(this.address);
    });
  }
  }


