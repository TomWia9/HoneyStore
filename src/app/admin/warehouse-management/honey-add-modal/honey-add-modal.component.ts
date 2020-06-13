import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-honey-add-modal',
  templateUrl: './honey-add-modal.component.html',
  styleUrls: ['./honey-add-modal.component.css']
})
export class HoneyAddModalComponent implements OnInit {
  form: FormGroup;
  err: boolean = null;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      honeyName: '',
      honeyPrice: '',
      honeyImage: null,
    })
  }

  onSubmit(value){
    if(value.honeyName !== '' && value.honeyPrice !== ''){
      console.log('works');
      this.err = false;
      // honeyService.addHoney(value as Honey);
      
    } else{
      this.err = true;
    }
  }

}
