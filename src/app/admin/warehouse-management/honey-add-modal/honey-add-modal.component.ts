import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HoneysService } from 'src/app/services/honeys.service';
import { Honey } from 'src/app/shared/honey';

@Component({
  selector: 'app-honey-add-modal',
  templateUrl: './honey-add-modal.component.html',
  styleUrls: ['./honey-add-modal.component.css']
})
export class HoneyAddModalComponent implements OnInit {
  form: FormGroup;
  err: boolean = null;
  constructor(public activeModal: NgbActiveModal, private honeysService: HoneysService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
      'honeyImage': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.form);
    this.honeysService.addHoney(this.form.value as Honey);
    this.activeModal.close();
  }

}
