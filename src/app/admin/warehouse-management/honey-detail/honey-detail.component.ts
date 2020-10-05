import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HoneysService } from 'src/app/services/honeys.service';
import { HoneyInTheWarehouse } from 'src/app/shared/honeyInTheWarehouse';

@Component({
  selector: 'app-honey-detail',
  templateUrl: './honey-detail.component.html',
  styleUrls: ['./honey-detail.component.css']
})
export class HoneyDetailComponent implements OnInit {

  honeyId: number;
  err = false;
  honey: HoneyInTheWarehouse = new HoneyInTheWarehouse();

  constructor(private route: ActivatedRoute, private honeysService: HoneysService) { }

  ngOnInit(): void {

      this.route.params.subscribe(
        (params: Params) => {
         this.honeyId = +params.index;
         this.honeysService.getHoney(this.honeyId).subscribe(x => {
           this.honey = x.body;
         });
       }
     );
  }

  createImgPath(){
    return `https://localhost:5001/${this.honey.imgPath}`;
  }
   }
