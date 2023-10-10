import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    UserComponentComponent,
    AdminComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
