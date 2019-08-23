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
  constructor( private gapiService: GoogleApiService,
               private googleFilesService: UserService,
               private dataPrepService: DataPrepService) {
    this.gapiService.onLoad().subscribe();
  }
  public signIn() {
    this.googleFilesService.signIn();
  }

  loadDataFlow() {
    this.dataPrepService.getFiles(this.googleFilesService.getToken()).subscribe((res) => {
      console.log(res);

    });
  }
 /*execute() {
    return gapi.client.projects.templates.launch({
      projectId: 'ghire-freddy-vargas-etl-test',
      location: 'us-central1',
      // tslint:disable-next-line: max-line-length
      gcsPath: 'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/temp/cloud-dataprep-candidates-2972361-by-fvargas_template',
      bearer_token: this.googleFilesService.getToken()
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log('Response', response);
              },
              function(err) { console.error('Execute error', err); });
  }*/
}
