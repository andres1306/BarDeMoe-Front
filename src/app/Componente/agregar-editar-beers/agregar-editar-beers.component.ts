import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Beers } from 'src/app/interface/beers';
import { BeersService } from 'src/app/service/beers.service';

@Component({
  selector: 'app-agregar-editar-beers',
  templateUrl: './agregar-editar-beers.component.html',
  styleUrls: ['./agregar-editar-beers.component.css']
})
export class AgregarEditarBeersComponent implements OnInit {

  Loading: boolean=false;
  BeerGroup :FormGroup;
  id:number;
  beer:any=[];


  constructor(private fb: FormBuilder,
    private _BeersService:BeersService,
    private aRoute:ActivatedRoute) { 
    this.BeerGroup=this.fb.group({
      Name:['',Validators.required],
      Price:['',Validators.required],
      Quantity:['',Validators.required],
      Content:['',Validators.required]
    })

    this.id =Number(this.aRoute.snapshot.paramMap.get('id'));
     console.log(this.id);  }

  ngOnInit(): void {
    this.getbeer();

  }
  Keep_Beer(){
    const Beer: Beers ={
      Name: this.BeerGroup.value.Name,
      Price:this.BeerGroup.value.Price,
      Content:this.BeerGroup.value.Content,
      Quantity:this.BeerGroup.value.Quantity,
      LinkIMG:this.BeerGroup.value.LinkIMG
    }
    console.log(Beer);
  }
  getbeer(){
    this._BeersService.GetBeer(this.id).subscribe(data=>{
      if(data){
        this.beer=data;
      }
    console.log(this.beer);
    })
  }

}
