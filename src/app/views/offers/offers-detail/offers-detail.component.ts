import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../shared/store/state/app.state';
import { Observable } from 'rxjs';
import { selectSelectedUser, offers } from '../../../shared/store/selectors/user.selector';
import { GetOffers } from '../../../shared/store/actions/user.actions';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss']
})
export class OffersDetailComponent implements OnInit {
  offer: Offer;
  offers: Offer[];
  user: User;
  user$: Observable<User>;
  offers$: Observable<Offer[]>;

  constructor(
    private profileService: ProfileService,
    private offersService: OffersService,
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>
  ) {
    this.user$ = _store.pipe(select(selectSelectedUser));
    this.user$.subscribe((res)=> {this.user=res});
    this.offers$ = _store.pipe(select(offers));
    this.offers$.subscribe((res)=> {this.offers=res});
    //this.user = this.profileService.user;
    this.route.params.subscribe(params => {
      const offerID = +params.id;
      this.offer = (this.offers.find(offer => offer.id === offerID) || {}) as Offer;
    });
  }

  subscribeOffer() {
    this.user.offers = [...this.user.offers, this.offer];
    this.router.navigate(['/admin/profile']);
  }
  unsubscribeOffer() {
    this.user.offers = this.user.offers.filter(
      _offer => _offer.id !== this.offer.id
    );
    this.router.navigate(['/admin/profile']);
  }
  isSubscribe(): boolean {
    return !!this.user.offers.find(_offer => this.offer.id === _offer.id);
  }

  ngOnInit() {}
}
