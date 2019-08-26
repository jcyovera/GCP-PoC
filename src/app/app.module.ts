import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from 'ng-gapi';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';


const gapiClientConfig: NgGapiClientConfig = {
  client_id: '814585023422-1c7mg9mlpanvqq6cisq6qgm37bv6j5h6.apps.googleusercontent.com',
  discoveryDocs: ['https://dataflow.googleapis.com'],
  scope: [
    'https://www.googleapis.com/auth/compute.readonly',
    'https://www.googleapis.com/auth/compute',
    'https://www.googleapis.com/auth/cloud-platform',
    'https://www.googleapis.com/auth/userinfo.email'
  ].join(' ')
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
