import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beers } from 'src/app/interface/beers';
import { BeersService } from 'src/app/service/beers.service';

@Component({
  selector: 'app-beers-edit',
  templateUrl: './beers-edit.component.html',
  styleUrls: ['./beers-edit.component.css']
})
export class BeersEditComponent implements OnInit {
  id:Number;
  beer!:Beers;
  constructor(private _BeerService:BeersService,
    private Aroute :ActivatedRoute) {
        this.id= Number(this.Aroute.snapshot.paramMap.get('id'));
     }

  ngOnInit(): void {
    this.getbeer();
  }

  getbeer(){
    this._BeerService.GetBeer(this.id).subscribe(data=>{
        this.beer=data;
        console.log(this.beer);
    })
  }

}
