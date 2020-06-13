import { Component, OnInit } from '@angular/core';
import { Honey } from 'src/app/shared/honey';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HoneyAddModalComponent } from '../honey-add-modal/honey-add-modal.component';

@Component({
  selector: 'app-honey-list',
  templateUrl: './honey-list.component.html',
  styleUrls: ['./honey-list.component.css']
})
export class HoneyListComponent implements OnInit {
  faWindowClose = faWindowClose;
  allowDelete = false;
  honeys: Honey[] = [
    {id: 1, name: 'Acacia Honey', amount: 1000, price: 30},
    {id: 2, name: 'Avocado Honey', amount: 500, price: 40},
    {id: 3, name: 'Basswood Honey', amount: 300, price: 35},
    {id: 4, name: 'Blueberry Honey', amount: 99, price: 33},
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onDelete(honeyID: number){
    console.log(honeyID);
    // honeyService.deleteHoney(honeyID);    
  }

  onAllowDelete(){
    this.allowDelete = !this.allowDelete;
  }

  onAdd(){
    const modalRef = this.modalService.open(HoneyAddModalComponent, { scrollable: true });
  }

}
