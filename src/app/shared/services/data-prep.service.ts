import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPrepService {
  projectId = 'ghire-freddy-vargas-etl-test';
  location = 'us-central1';
  apiKey = '';
  gsPath = 'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/temp/cloud-dataprep-candidates-2972361-by-fvargas_template';
  private readonly API_URL: string =
  // tslint:disable-next-line: max-line-length
  `https://dataflow.googleapis.com/v1b3/projects/${this.projectId}/locations/${this.location}/templates:launch?dynamicTemplate.gcsPath=${this.gsPath}`;
  resource = {
    jobName: 'restful-test3',
    parameters: {
      // tslint:disable-next-line: max-line-length
      inputLocations: '{location1:\'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/inputs/workable/workable_jobs_input.xlsx\', location2:\'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/inputs/workable/workable_jobs_input.xlsx\', location3:\'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/inputs/workable/workable_jobs_input.xlsx\'}',
      // tslint:disable-next-line: max-line-length
      outputLocations: '{location1:\'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/outputs/job_workable/workable_job.csv/file\', location2:\'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/jobrun/column_creation_3053919/.profiler/profilertypecheckhistograms.json/file\', location3:\'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/jobrun/column_creation_3053919/.profiler/profilervalidvaluehistograms.json/file\'}'
    },
    environment: {
      tempLocation: 'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/temp',
      zone: 'us-central1-f'
    }
  };
  constructor(private httpClient: HttpClient) { }
  public getFiles(authtoken: string): Observable<any> {
    return this.httpClient.post(this.API_URL , this.resource, {
      headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: `Bearer ${authtoken}`
        })
    });
}
}
