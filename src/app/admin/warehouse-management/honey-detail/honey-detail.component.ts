import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Honey } from 'src/app/shared/honey';
import { HoneysService } from 'src/app/services/honeys.service';

@Component({
  selector: 'app-honey-detail',
  templateUrl: './honey-detail.component.html',
  styleUrls: ['./honey-detail.component.css']
})
export class HoneyDetailComponent implements OnInit {

  index: number;
  err = false;
  honeys: Honey[];
  honey: Honey;

  constructor(private route: ActivatedRoute, private router: Router, private honeysService: HoneysService) { }

  ngOnInit(): void {

    this.honeys = this.honeysService.getHoneysList();


    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params.index;

        if (this.index >= this.honeys.length) {
          this.err = true;
          this.router.navigate(['not-found']);
        } else {
          this.honey = this.honeys[this.index];
        }
      }
    );

    // honey = honeyService.getHoney(this.id);

  }

}
