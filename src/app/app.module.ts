import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToasterModule } from 'angular2-toaster';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routes } from './app-routing.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './modules/header/header.component';
import { OppositeAuthGuard } from './common/opposite-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToasterModule.forRoot(),
    RouterModule.forRoot(routes),
    ToasterModule.forRoot(),
    Ng2SearchPipeModule 
  ],
  providers: [
    OppositeAuthGuard
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
