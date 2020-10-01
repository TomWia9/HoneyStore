import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Address } from 'src/app/shared/address';
import { NewPassword } from 'src/app/shared/newPassword';
import { ChangeAddressModalComponent } from '../../change-address-modal/change-address-modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  form: FormGroup;
  faCogs = faCogs;
  userId: number;
  address = new Address();
  newAddress: Observable<Address>;
  newPassword: NewPassword = new NewPassword();
  error: boolean;
  constructor(private usersService: UsersService, private authService: AuthService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      oldPassword: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      passwordRepeat: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  });

    this.userId = this.authService.getCurrentUserValue().id;
    this.getClientAddress();

  }

  onChangeAddress() {
    const modalRef = this.modalService.open(ChangeAddressModalComponent, { size: 'xl', scrollable: true });
    modalRef.componentInstance.userId = this.userId;
  }

  onChangePassword() {

    this.newPassword.oldPassword = this.form.value.oldPassword;
    this.newPassword.newPassword = this.form.value.newPassword;

    this.usersService.ChangePassword(this.userId, this.newPassword).subscribe(
      () => {
       this.form.reset();
       this.error = false;

         },

      () => this.error = true
    ); }


getClientAddress() {
    this.usersService.GetClientAddress(this.userId).subscribe(x => {
      this.address = x.body;
    });
  }
  }


