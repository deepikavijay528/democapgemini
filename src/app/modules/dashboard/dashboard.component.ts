import { Component, OnInit } from '@angular/core';
import  *  as  data  from  'src/app/data/data.json';
import {DataModel} from '../../models/DataModel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products:DataModel = (data as any).default;
  isGrid:boolean=true;
  searchText;
  constructor() { }

  ngOnInit(): void {
  }
  isGridEnable(status){
    this.isGrid = status;
  }

}
