import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { OffersService } from '../../../shared/services/offers.service';
import { Offer } from '../../../shared/models/offer.model';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnChanges {
  @Input() user: User;
  @Input() offers: Offer[];
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];

  offersOtherColumns: string[] = ['puesto', 'empresa', 'familia', 'fecha', 'provincia', 'municipio'];
  offersColumns: string[] = ['puesto', 'empresa', 'familia', 'fecha', 'provincia', 'municipio', 'inscrito', 'acciones'];

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && changes.offers) {
      this.selectOffers();
      console.log(this.offersOther);
    }
  }

  private selectOffers() {
    const studiesOfUser = this.user.studies;
    const offersOfUser = this.user.offers;
    this.offersStudy = this.offers
      .filter(offer =>
        studiesOfUser.some(study => study.uid === offer.category.uid)
      )
      .map(offer => {
        const offerUser = !!offersOfUser.find(
          _offerUser => _offerUser.id === offer.id
        );
        return { ...offer, subscribe: offerUser };
      });
    this.offersOther = this.offers.filter(offer =>
      studiesOfUser.every(study => study.uid !== offer.category.uid)
    );
  }
}
