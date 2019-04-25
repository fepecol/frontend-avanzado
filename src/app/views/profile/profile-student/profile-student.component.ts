import { Component } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from '../../../shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../shared/store/state/app.state';
import { Observable } from 'rxjs';
import { selectSelectedUser } from '../../../shared/store/selectors/user.selector';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {
  user: User;
  user$: Observable<User>;
  constructor(
    private profileService: ProfileService,
    private _store: Store<IAppState>
    ) {
    this.user$ = _store.pipe(select(selectSelectedUser));
    //this.user = this.profileService.user;
  }

  deleteStudy(studyID: number) {
    const studies = this.user.studies;
    const index = studies.findIndex(study => study.uid === studyID);
    if (index === -1) {
      alert('Error: Study not found');
      return;
    }
    studies.splice(index, 1);
    this.profileService.updateProfile(this.user);
  }
  deleteLanguage(languageID: any) {
    const languages = this.user.languages;
    const index = languages.findIndex(language => language.uid === languageID);
    if (index === -1) {
      alert('Error: Language not found');
      return;
    }
    languages.splice(index, 1);
    this.profileService.updateProfile(this.user);
  }
}
