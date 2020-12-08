import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userName:string=sessionStorage.getItem('userName');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Logout(){
    sessionStorage.removeItem('userName');
    this.router.navigateByUrl('login');
  }

}
