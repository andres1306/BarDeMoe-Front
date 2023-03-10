import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/service/beers.service';
import { MatTableDataSource } from '@angular/material/table';
import { Beers } from 'src/app/interface/beers';
import { getMatTooltipInvalidPositionError } from '@angular/material/tooltip';
@Component({
  selector: 'app-beers-render',
  templateUrl: './beers-render.component.html',
  styleUrls: ['./beers-render.component.css']
})
export class BeersRenderComponent   {

  loading=true;
  Beers:any= [];
  data:any={};
  id:number=0;


  constructor(private _BeerServise:BeersService, )
  { 
    this.id.valueOf
  }

  ngOnInit(): void {
    console.log(this.id);
    this.getbeers()
    this.data=Object.values(this.Beers);

  }

  getbeers(){
    this._BeerServise.GetBeers().subscribe(data=>{
      if(data){
        this.Beers=data;
        this.loading=true;
        }
    });
  }
 
  BuyBeer():void{
    //this._BeerServise.GetBeer();



  }


}
