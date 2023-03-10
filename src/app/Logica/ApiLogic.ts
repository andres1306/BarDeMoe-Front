import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { Beers } from "../interface/beers";
import { BeersService } from "../service/beers.service";

export class ApiLogic{

constructor(private _BeerServise:BeersService){
    this.id.valueOf
}

loading=true;
Beers:any= [];
data:any={};
id:number=0;

getbeers(): Beers{ 
     this._BeerServise.GetBeers().subscribe(data=>{
      if(data){
        this.Beers=data;
        this.loading=true;
        }
    });
    return this.Beers;
  }





}