import { Component, OnInit } from '@angular/core';
import { Honey } from 'src/app/shared/honey';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HoneyAddModalComponent } from '../honey-add-modal/honey-add-modal.component';
import { HoneysService } from 'src/app/services/honeys.service';

@Component({
  selector: 'app-honey-list',
  templateUrl: './honey-list.component.html',
  styleUrls: ['./honey-list.component.css']
})
export class HoneyListComponent implements OnInit {
  faWindowClose = faWindowClose;
  allowDelete = false;
  honeys: Honey[];

  constructor(private modalService: NgbModal, private honeysService: HoneysService) { }

  ngOnInit(): void {
    this.honeysService.getHoneysList().subscribe(x => {
      this.honeys = x.body;
    });
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
