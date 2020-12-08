import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster';
import { CommonService } from './common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo Capg';
  readyToLoad: boolean = true;

  constructor(private cdRef: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService) {
    }

  ngOnInit() {
  }
  
    //Toaster Configuration
    public toasterConfig: ToasterConfig = new ToasterConfig({
      showCloseButton: false,
      tapToDismiss: true,
      timeout: 4000
    });
}
