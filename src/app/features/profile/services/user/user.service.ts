import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _loggedIn = false;
  private _role : 'Admin' | 'User' = "User"; 
  // private _role : 'Admin' | 'User' = "Admin"; 
  
  constructor() { }
  get loggedIn(){
    return this._loggedIn;
  }
  get role(){
    return this._role;
  }
}
