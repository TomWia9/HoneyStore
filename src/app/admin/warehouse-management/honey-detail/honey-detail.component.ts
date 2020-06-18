import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Honey } from 'src/app/shared/honey';

@Component({
  selector: 'app-honey-detail',
  templateUrl: './honey-detail.component.html',
  styleUrls: ['./honey-detail.component.css']
})
export class HoneyDetailComponent implements OnInit {

  index: number;
  err = false;
  honeys: Honey[] = [ // temp (mock data)
    {id: 1, name: 'Acacia Honey', amount: 1000, price: 30},
    {id: 2, name: 'Avocado Honey', amount: 500, price: 40},
    {id: 3, name: 'Basswood Honey', amount: 300, price: 35},
    {id: 4, name: 'Blueberry Honey', amount: 99, price: 33},
  ];
  honey: Honey;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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
