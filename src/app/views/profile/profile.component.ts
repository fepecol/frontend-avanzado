import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppStore } from '../../shared/states/store.interface';
import { Store } from '@ngrx/store';
import { getProfile } from '../../shared/states/user';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import * as UserActions from '../../shared/states/user/actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  user$: Observable<User>;

  constructor(private store$: Store<AppStore>) {
    this.user$ = this.store$.select(getProfile);
  }
  updateUser(user: User) {
    this.store$.dispatch(new UserActions.UpdateUser(user));
  }
}
