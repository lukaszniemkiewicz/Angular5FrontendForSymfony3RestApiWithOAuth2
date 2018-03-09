import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    constructor(private authService: AuthService) { }
    
    canActivate() {
        console.log('home guard:'+this.authService.isLoggedIn())
        return this.authService.isLoggedIn();
      }
}