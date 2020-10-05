import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HoneysService } from 'src/app/services/honeys.service';
import { Router } from '@angular/router';
import { HoneyInTheWarehouse } from 'src/app/shared/honeyInTheWarehouse';

@Component({
  selector: 'app-honey-add-modal',
  templateUrl: './honey-add-modal.component.html',
  styleUrls: ['./honey-add-modal.component.css']
})
export class HoneyAddModalComponent implements OnInit {
  form: FormGroup;
  err: boolean = null;
  honey: HoneyInTheWarehouse = new HoneyInTheWarehouse();
  public response: {dbPath: ''};
  uploaded = false;
  constructor(public activeModal: NgbActiveModal, private honeysService: HoneysService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.form);

    this.honey = {
      id: null,
      name: this.form.value.name,
      price: this.form.value.price,
      amount: this.form.value.amount,
      imgPath: this.response.dbPath
    };
    

    this.honeysService.addHoney(this.honey).subscribe(() => {this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/warehouse']);
      });
        this.activeModal.close();
       },
        () => {
         this.err = true;
        });
  }

  public uploadFinished = (event) => {
    this.response = event;
    this.uploaded = true;
  }

}
