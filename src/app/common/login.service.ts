import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private _commonService: CommonService) { }
  setAuth(user : UserModel) {
    sessionStorage.setItem('userName', user.UserName);
  }

  Login(userModel: UserModel) {
    if (userModel.UserName == 'user1' && userModel.Password == "pa$$w0rd") {
      this.setAuth(userModel);
      this.router.navigateByUrl('dashboard');
    }
    else {
      this._commonService.showErrorMessage('Invalid Credential');
    }
  }
}
