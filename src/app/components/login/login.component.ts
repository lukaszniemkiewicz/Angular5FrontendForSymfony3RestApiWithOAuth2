import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }
 
  onSubmit(form:NgForm){
    this.authService.onLogin(form.value.server,form.value.password,form.value.username)
  }
}
