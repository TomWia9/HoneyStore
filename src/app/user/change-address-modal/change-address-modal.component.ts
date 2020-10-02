import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';
import { Address } from 'src/app/shared/address';

@Component({
  selector: 'app-change-address-modal',
  templateUrl: './change-address-modal.component.html',
  styleUrls: ['./change-address-modal.component.css']
})
export class ChangeAddressModalComponent implements OnInit {
  form: FormGroup;
  error: boolean;

  @Input() userId: number;
  constructor(public activeModal: NgbActiveModal, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      city: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      streetAndHouseNumber: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      postcode: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  });  
  }

  onSubmit() {

    const address: Address = {
      city: this.form.value.city,
      streetAndHouseNumber: this.form.value.streetAndHouseNumber,
      postCode: this.form.value.postcode
    };    

    this.usersService.ChangeAddress(this.userId, address).subscribe(
      () => {
       this.form.reset();
       this.error = false;
       this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/account']);
    });
       this.activeModal.close();
         },

      () => this.error = true
       );
 }

}
