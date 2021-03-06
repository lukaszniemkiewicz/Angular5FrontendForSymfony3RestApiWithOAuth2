import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CanActivateViaAuthGuard } from './Guards/canActivateViaAuth';
const appRoutes: Routes =[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login',component: LoginComponent,pathMatch:'full'},
    {path: 'home',component: HomeComponent,pathMatch:'full',
    canActivate: [
        CanActivateViaAuthGuard
      ]
    },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}