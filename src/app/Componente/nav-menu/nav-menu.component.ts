import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  Name:string="";
  
  constructor() { }

  ngOnInit(): void {
    this.Name_Component();
  }

  Name_Component():string{
   this.Name= this.Name_Component();
   console.log(this.Name);
   return  this.Name;
  }

}
