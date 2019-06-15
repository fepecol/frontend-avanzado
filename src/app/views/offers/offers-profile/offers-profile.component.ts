import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OffersService } from '../../../shared/services/offers.service';
import { Offer } from '../../../shared/models/offer.model';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnChanges {
  @Input() user: User;
  offers: Offer[] = [];
  constructor() {}
  ngOnChanges() {
    this.offers = this.user.offers;
  }
}
