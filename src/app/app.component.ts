import { Component } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from './shared/services/google-drive.service';
import { DataPrepService } from './shared/services/data-prep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'google-oauth-app';
  jobName: string;
  constructor( private gapiService: GoogleApiService,
               private googleFilesService: UserService,
               private dataPrepService: DataPrepService) {
    this.gapiService.onLoad().subscribe();
  }
  public signIn() {
    this.googleFilesService.signIn();
  }

  loadDataFlow() {
    this.dataPrepService.getFiles(this.googleFilesService.getToken(), this.jobName.trim()).subscribe((res) => {
      console.log(res);

    });
  }
}
