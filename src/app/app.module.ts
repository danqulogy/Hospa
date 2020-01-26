import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,BrowserXhr } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
// import { AddMedicineComponent } from './modules/pharmacy/add-medicine/add-medicine.component';

// UtilsService
import { UtilsService } from './utils.service';
import { AuthenticationService } from './authentication.service';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    AppRoutingModule,
    // LoadingBarHttpClientModule,
    NgProgressModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    UtilsService,
    AuthenticationService,
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}
  ],
  bootstrap: [AppComponent],
	entryComponents: []
})
export class AppModule { }
