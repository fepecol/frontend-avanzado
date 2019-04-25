import { Injectable } from '@angular/core';
import { Effect, ofType, Actions} from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { from, of } from 'rxjs';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetAccess,
  GetAccessSuccess,
  EUserActions,
  GetAccessError
} from '../actions/user.actions';
import { SigninService } from '../../../views/signin/signin.service';
import { ProfileService } from '../../../shared/services/profile.service';
import { selectUserList } from '../selectors/user.selector';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

  @Effect()
  GetAccess$ = this._actions$.pipe(
    ofType<GetAccess>(EUserActions.GetAccess),
    map((action) => action.payload),
    switchMap(payload => {
      return from(this._signinService.login2(payload.email, payload.password))
      .pipe(
        switchMap(user => {
        if(user !== undefined){
          return of(new GetAccessSuccess(user))
        }else{
          return of(new GetAccessError())
        }
        })
    )})
  );

  @Effect({dispatch:false})
  GetAccessSuccess$ = this._actions$.pipe(
    ofType<GetAccessSuccess>(EUserActions.GetAccessSuccess),
    tap((user)=>console.log(user)),
    switchMap(() => this.router.navigate(['admin/dashboard']))
  );

  constructor(
    private _signinService: SigninService,
    private _profileService: ProfileService,
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private router: Router,
  ) {}
}
