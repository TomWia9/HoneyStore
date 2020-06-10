import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faWarehouse, faDollarSign } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-honey-modal',
  templateUrl: './honey-modal.component.html',
  styleUrls: ['./honey-modal.component.css']
})
export class HoneyModalComponent{

  @Input() honeyName;
  @Input() amount;
  @Input() price;
  faWarehouse = faWarehouse;
  faDollarSign = faDollarSign;

  constructor(public activeModal: NgbActiveModal) {
  }


}
