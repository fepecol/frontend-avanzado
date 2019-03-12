import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../shared/services/offers.service';
import { Offer } from '../../shared/models/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers: Offer[];

  constructor(private offerservice: OffersService) { }

  ngOnInit() {
    this.offerservice.getOffers().subscribe(offers => {
      console.log(offers);
      this.offers=offers;
    })
  }

}
