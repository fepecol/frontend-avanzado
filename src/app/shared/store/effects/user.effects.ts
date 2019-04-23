import { Injectable } from '@angular/core';
import { Effect, ofType, Actions} from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { from, of } from 'rxjs';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetAccess,
  GetAccessSuccess,
  EUserActions
} from '../actions/user.actions';
import { SigninService } from '../../../views/signin/signin.service';
import { selectUserList } from '../selectors/user.selector';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

  /*@Effect()
  GetAccess$ = this._actions$.pipe(
    ofType<GetAccess>(EUserActions.GetAccess),
    //falta pasarle parametros
    switchMap(() => this._signinService.login2()),
    switchMap(res => {return of(new GetAccessSuccess(res));
    })
  );*/

  @Effect({dispatch:false})
  GetAccess$ = this._actions$.pipe(
    ofType<GetAccess>(EUserActions.GetAccess),
    map((action) => action.payload),
    switchMap(payload => {
      return from(this._signinService.login2(payload.email, payload.password))
      .pipe(
        switchMap(user => {
        console.log(user);
        this.router.navigate(['admin/dashboard'])
        return of(new GetAccessSuccess(user))
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
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private router: Router,
  ) {}
}
