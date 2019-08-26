import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPrepService {
  projectId = 'ghire-freddy-vargas-etl-test';
  location = 'us-central1';
  apiKey = '';
  // tslint:disable-next-line: max-line-length
  gsPath = 'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/temp/cloud-dataprep-candidates-2972361-by-fvargas_template';
  private readonly API_URL: string =
    // tslint:disable-next-line: max-line-length
    `https://dataflow.googleapis.com/v1b3/projects/ghire-freddy-vargas-etl-test/locations/us-central1/templates:launch?gcsPath=gs%3A%2F%2Fdataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a%2Ffvargas%40belatrixsf.com%2Ftemp%2Fcloud-dataprep-candidates-2972361-by-fvargas_template`;
  resource = {
    jobName: 'restful-test8',
    parameters: {
      inputLocations: '',
      outputLocations: ''
    },
    environment: {
      tempLocation: 'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/temp',
      zone: 'us-central1-f'
    }
  };

  constructor(private httpClient: HttpClient) {
  }

  public getFiles(authtoken: string, jobName: string, inputLocations?: string, outputLocations?: string): Observable<any> {
    const outputLocations2 = "gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/OUTPUTS/profilerTypeCheckHistograms.json/file";
    const outputLocations3 = "gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/OUTPUTS/profilerValidValueHistograms.json/file";
    this.resource.jobName = jobName;
    this.resource.parameters.inputLocations =
      `{\"location1\":\"${inputLocations}\", \"location2\":\"${inputLocations}\", \"location3\":\"${inputLocations}\"}`;
    this.resource.parameters.outputLocations =
      `{\"location1\":\"${outputLocations}\",\"location2\":\"${outputLocations2}\",\"location3\":\"${outputLocations3}\"}`;

    return this.httpClient.post(this.API_URL, this.resource, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`
      })
    });
  }
}

