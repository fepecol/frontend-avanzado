import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { User } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../shared/store/state/app.state';
import { Observable } from 'rxjs';
import { selectSelectedUser, offers } from '../../../shared/store/selectors/user.selector';
import { GetOffers } from '../../../shared/store/actions/user.actions';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnInit {
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  offers: Offer[] = [];
  user: User;
  user$: Observable<User>;
  offers$: Observable<Offer[]>;

  constructor(
    private profileService: ProfileService,
    private offersService: OffersService,
    private _store: Store<IAppState>
  ) {
    this.user$ = _store.pipe(select(selectSelectedUser));
    this.user$.subscribe((res)=> {this.user=res});
    this._store.dispatch(new GetOffers());
    this.offers$ = _store.pipe(select(offers));
    this.offers$.subscribe((res)=> {this.offers=res});
    this.selectOffers();
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

    this.offersOther = this.offersService.offers.filter(offer =>
      studiesOfUser.every(study => study.uid !== offer.category.uid)
    );
  }

  ngOnInit() {}
}
