import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){
    this.isLoggedIn = true;
  }

  isLoggedIn:boolean = false;


  async login(){
    console.log("LOGUEANDO")
  }

  async register(){
    console.log("REGISTRANDO")
  }

  logOut(){

  }
}
