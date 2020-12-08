import {Component, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {ActivatedRoute, Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {UserModel} from '../../models/UserModel';
import {LoginService} from '../../common/login.service';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userModel: UserModel = new UserModel();
  public response: string;
  username: null;
  password: null

  constructor(private route: ActivatedRoute, private toaster: ToasterService, private router: Router,
    private service: LoginService,
    private _spinner: NgxSpinnerService,
    private _commonService: CommonService) {
  }

  ngOnInit() {
  }

  canLogIn() {
    return this.username && this.password;
  }

  doLogin(UserName: string, Password: string) {
    if (UserName && Password) {
      //this._commonService.parentSpinnerShow();
      let userModelSelected = new UserModel();
      userModelSelected.UserName = UserName;
      userModelSelected.Password = Password;
      this.service.Login(userModelSelected);
    //  this._commonService.parentSpinnerHide();
    }
    else {
      this.response = "Please enter username and password!";
      this._commonService.parentSpinnerHide();
    }
  }

}
