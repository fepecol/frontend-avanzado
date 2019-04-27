import { Component } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { SigninService } from '../signin/signin.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../shared/store/state/app.state';
import { selectSelectedUser } from '../../shared/store/selectors/user.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  constructor(
    private _store: Store<IAppState>
  ) {}

  /*   constructor(
    private profileService: ProfileService,
    private signinService: SigninService
  ) {
    this.signinService
      .login({ email: 'carlos.caballero@gmail.com', password: '1234' })
      .then(user => {
        this.profileService.user = user;
      });
  } */
}
