import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { HomeComponent } from './components/home/home.component'
import { CanActivateViaAuthGuard} from './Guards/canActivateViaAuth'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [ AuthService,CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
