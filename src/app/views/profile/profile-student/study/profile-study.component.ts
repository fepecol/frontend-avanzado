import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import {
  Study,
  VocationalStudy,
  CollegeStudy
} from 'src/app/shared/models/study.model';
import { MockData } from 'src/app/shared/mock-data';
import { Observable } from 'rxjs';
import { User } from '../../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { selectSelectedUser } from '../../../../shared/store/selectors/user.selector';
import { IAppState } from '../../../../shared/store/state/app.state';
import { ModifyAccount } from '../../../../shared/store/actions/user.actions';

@Component({
  selector: 'app-profile-study',
  templateUrl: './profile-study.component.html',
  styleUrls: ['./profile-study.component.scss']
})
export class ProfileStudyComponent {
  user: User;
  uid: number;
  user$: Observable<User>;
  studiesForm: FormGroup;
  options = MockData.TYPE_STUDIES;
  study: Study = {} as (VocationalStudy | CollegeStudy);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private _store: Store<IAppState>
  ) {
    this.user$ = _store.pipe(select(selectSelectedUser));
    this.route.params.subscribe(params => {
      this.uid = +params.uid;
    });
    this.user$.subscribe((res)=> {
      this.user=res;
      this.study = (this.user.studies.find(study => study.uid === this.uid) || {}) as
        | VocationalStudy
        | CollegeStudy;
    });

    /*this.route.params.subscribe(params => {
      const user = this.profileService.user;
      const uid = +params.uid;
      this.study = (user.studies.find(study => study.uid === uid) || {}) as
        | VocationalStudy
        | CollegeStudy;
    });*/
    this.studiesForm = new FormGroup({
      option: new FormControl(this.study.level, [Validators.required])
    });
  }

  compareOption(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(study: VocationalStudy | CollegeStudy) {
    //const user = this.profileService.user;
    const studies = this.user.studies;
    const foundIndex = studies.findIndex(_study => _study.uid === study.uid);
    studies[foundIndex] = study;
    this._store.dispatch(new ModifyAccount(this.user));
    //this.profileService.updateProfile(user);
    //this.router.navigate(['/admin/profile']);
  }
  private save(study: VocationalStudy | CollegeStudy) {
    //const user = this.profileService.user;
    const _study = MockData.fakeIncreaseID<VocationalStudy | CollegeStudy>(
      this.user.studies,
      study
    );
    this.user.studies = [...this.user.studies, _study];
    this._store.dispatch(new ModifyAccount(this.user));
    /*this.profileService.updateProfile(user);
    this.router.navigate(['/admin/profile']);*/
  }

  saveOrUpdate(study: VocationalStudy | CollegeStudy) {
    study.level = this.studiesForm.get('option').value;
    this.isNew() ? this.save(study) : this.update(study);
  }
  public isNew(): boolean {
    return !!!this.study.uid;
  }
  public isSelectVocational(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[0].uid;
  }
  public isSelectUniversity(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[1].uid;
  }
  public backProfile() {
    this.router.navigate(['/admin/profile']);
  }
}
