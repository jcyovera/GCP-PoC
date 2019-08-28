import { Component } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from './shared/services/google-drive.service';
import { DataPrepService } from './shared/services/data-prep.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome google-oauth-app';
  jobName: string;
  inputLocations: string;
  outputLocations: string;
  result = '';

  constructor( private gapiService: GoogleApiService,
               private googleFilesService: UserService,
               private dataPrepService: DataPrepService,
               translate: TranslateService) {
    this.gapiService.onLoad().subscribe();
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
  public signIn() {
    this.googleFilesService.signIn();
  }

  loadDataFlow() {
    // tslint:disable-next-line: max-line-length
    this.dataPrepService.getFiles(this.googleFilesService.getToken(), this.jobName.trim(), this.inputLocations.trim(), this.outputLocations.trim()).subscribe((res) => {
      console.log(res);
      this.result = res;

    });
  }
}
