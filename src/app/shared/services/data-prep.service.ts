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
  gsPath = 'gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/temp/cloud-dataprep-candidates-2972361-by-fvargas_template';
  private readonly API_URL: string =
    // tslint:disable-next-line: max-line-length
    `https://dataflow.googleapis.com/v1b3/projects/ghire-freddy-vargas-etl-test/locations/us-central1/templates:launch?gcsPath=gs%3A%2F%2Fdataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a%2Ffvargas%40belatrixsf.com%2Ftemp%2Fcloud-dataprep-candidates-2972361-by-fvargas_template`;
  resource = {
    "jobName": "restful-test8",
    "parameters": {
      "inputLocations": "{\"location1\":\"gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/INPUTS/workable/workable_jobs_input.xlsx\", \"location2\":\"gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/INPUTS/workable/workable_jobs_input.xlsx\", \"location3\":\"gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/INPUTS/workable/workable_jobs_input.xlsx\"}",
      "outputLocations": "{\"location1\":\"gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/OUTPUTS/workable/job_workable.csv\",\"location2\":\"gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/OUTPUTS/workable/job_workable.csv\",\"location3\":\"gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/OUTPUTS/workable/job_workable.csv\"}"
    },
    "environment": {
      "tempLocation": "gs://dataprep-staging-e6fbd213-f292-4f5a-a1f2-ecb2b4529d6a/fvargas@belatrixsf.com/temp",
      "zone": "us-central1-f"
    }
  };

  constructor(private httpClient: HttpClient) {
  }

  public getFiles(authtoken: string, jobName: string, inputLocations: string, outputLocations: string): Observable<any> {
    this.resource.jobName = jobName;
    this.resource.parameters.inputLocations = inputLocations;
    this.resource.parameters.outputLocations = outputLocations;

    return this.httpClient.post(this.API_URL, this.resource, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`
      })
    });
  }
}

