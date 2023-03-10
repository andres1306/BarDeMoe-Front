import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beers } from 'src/app/interface/beers';
import { BeersService } from 'src/app/service/beers.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ver-beers',
  templateUrl: './ver-beers.component.html',
  styleUrls: ['./ver-beers.component.css']
})
export class VerBeersComponent implements OnInit {

  loading=true;
  id:Number;
  displayColums:string[]=['Name','Price','Content','Code'];
  Beer:any =[];



  constructor(private _BeersService:BeersService, 
    private aRoute:ActivatedRoute) { 
    this.id =Number(this.aRoute.snapshot.paramMap.get('id'));
     console.log(this.id);
  }

  ngOnInit(): void {
    this.getbeer();
  }

  getbeer(){
    this._BeersService.GetBeer(this.id).subscribe(data=>{
      if(data){
        this.Beer=data;
        this.loading=false;
      }
    console.log(this.Beer);
    })
  }

}
