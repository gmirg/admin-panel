import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { authInterceptorProviders } from './Interceptor/auth.interceptor';
import { DataService } from './Services/data.service';
import { UserService } from './Services/user.service';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { AuthService } from './Services/auth.service';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

export function tokenGetter() {
  return sessionStorage.getItem("TOKEN_KEY");
}
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:3000"],  //add all your allowed domain
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [authInterceptorProviders,
    DataService,
    UserService,
    AuthService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3500}},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


