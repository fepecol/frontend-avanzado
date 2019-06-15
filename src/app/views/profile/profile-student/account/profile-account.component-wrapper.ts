import { Component } from '@angular/core';
import { User } from '../../../../shared/models/user.model';
import { AppStore } from '../../../../shared/states/store.interface';
import { Store } from '@ngrx/store';
import { getProfile } from '../../../../shared/states/user';
import { Observable } from 'rxjs';
import * as UsersActions from '../../../../shared/states/user/actions';

@Component({
  selector: 'app-profile-account-wrapper',
  template: `
    <app-profile-account
              [user]="user$ | async"
              (onSave)="save($event)">
    </app-profile-account>`,
})
export class ProfileAccountWrapperComponent {
  user$: Observable<User>;

  constructor(private store$: Store<AppStore>) {
      this.user$ = this.store$.select(getProfile);
  }
  save(user: User) {
    this.store$.dispatch(new UsersActions.UpdateUser(user));
  }
}
