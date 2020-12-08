import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private router: Router,
    private _toasterService: ToasterService,
    private _spinner: NgxSpinnerService) {

  }

  showSuccessMessage(message: string) {
    this.showAlert("success", message);
  }
  showErrorMessage(message: string) {
    this.showAlert("error", message);
  }
  showWarningMessage(message: string) {
    this.showAlert("warning", message);
  }
  showAlert(title: string, message: string) {
   this._toasterService.pop(title, title, message);
  }
  parentSpinnerShow() {
    this._spinner.show();
  }
  parentSpinnerHide() {
    this._spinner.hide();
  }
 


}
