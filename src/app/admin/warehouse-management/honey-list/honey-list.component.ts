import { Component, OnInit } from '@angular/core';
import { Honey } from 'src/app/shared/honey';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HoneyAddModalComponent } from '../honey-add-modal/honey-add-modal.component';
import { HoneysService } from 'src/app/services/honeys.service';
import { Router } from '@angular/router';
import { HoneyInTheWarehouse } from 'src/app/shared/honeyInTheWarehouse';

@Component({
  selector: 'app-honey-list',
  templateUrl: './honey-list.component.html',
  styleUrls: ['./honey-list.component.css']
})
export class HoneyListComponent implements OnInit {
  faWindowClose = faWindowClose;
  allowDelete = false;
  honeys: HoneyInTheWarehouse[];
  err;

  constructor(private modalService: NgbModal, private honeysService: HoneysService, private router: Router) { }

  ngOnInit(): void {
    this.honeysService.getHoneysList().subscribe(x => {
      this.honeys = x.body;
    });
  }

  onDelete(honeyId: number){
     this.honeysService.removeHoney(honeyId).subscribe(() => {
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/warehouse']);
    });
      
     }, 
     () => {
       alert('Something wen wrong, try again later');
     });
  }

  onAllowDelete(){
    this.allowDelete = !this.allowDelete;
  }

  onAdd(){
    this.modalService.open(HoneyAddModalComponent, { scrollable: true });
  }

}
