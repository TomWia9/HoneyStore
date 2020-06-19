import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private honeysService: HoneysService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      price: '',
      amount: '',
      honeyImage: null,
    });
  }

  onSubmit(value) {
    if (value.honeyName !== '' && value.honeyPrice !== '') {
      console.log('works');
      this.err = false;
      this.honeysService.addHoney(value as Honey);

    } else {
      this.err = true;
    }
  }

}
