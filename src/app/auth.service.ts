import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  loading=false;
  access_token;
  refresh_token;
  oAuth_url = environment.oAuth_url
  api_url = environment.api_url
  server;
  is_logged_in:boolean=false;
  credentials = {
    grant_type: 'password',
    client_id: '1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4',
    client_secret: '4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k',
    username: '',
    password: ''
  }
  constructor(private http: HttpClient, private router: Router) { 

  }

  
  onLogin(server,password, username) {
   
    this.credentials.username = username;
    this.credentials.password = password;


    console.log(this.credentials);
    this.http.post(this.oAuth_url, this.credentials)
      .subscribe(
      (v: any) => {
        this.access_token = v.access_token;
        this.refresh_token = v.refresh_token;
        localStorage.setItem('access_token', this.access_token)
        this.is_logged_in=true;
        this.router.navigate(['/home'])
      },
      (e) => {  }
      )

  }


  getData(path) {
    this.loading=true;
    var d = this.http.get(this.api_url + path + "?access_token=" + localStorage.getItem('access_token'))
    .map(response=>{
      this.loading=false;
      return response;
    });
    
    return d;
  }

  postData(path, value) {
    return this.http.post(this.api_url + path + "?access_token=" + localStorage.getItem('access_token'), value)
    .map(response=>{
      this.loading=false;
      return response;
    });

  }

  isLoggedIn(){
    return this.is_logged_in;
  }
}
