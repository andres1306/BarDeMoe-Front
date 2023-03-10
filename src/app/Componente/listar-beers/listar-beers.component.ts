import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Beers } from 'src/app/interface/beers';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BeersService } from 'src/app/service/beers.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import{BuyBeer} from 'src/app/interface/BuyBeers';
import { FormGroup,FormBuilder } from '@angular/forms';
import { text } from 'express';

@Component({
  selector: 'Beers-listar',
  templateUrl: './listar-beers.component.html',
  styleUrls: ['./listar-beers.component.css']
})
export class ListarBeersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Price', 'Name', 'Quantity', 'Content','Accions'];
  dataSource =new MatTableDataSource<Beers>();
  loading: boolean =false
  BeerCode = 0; 
  buybeer!:FormGroup ;

  id:Number; 
  Beer!:Beers;

  @ViewChild(MatPaginator)pagineitor! :MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;

  
  constructor(private _snackbar : MatSnackBar, 
    private _BeersService:BeersService,
    private aRoute:ActivatedRoute) { 
      this.id =Number(this.aRoute.snapshot.paramMap.get('id'));
       console.log(this.id); 
      }

  ngAfterViewInit(): void {
    this.dataSource.paginator= this.pagineitor
    this.dataSource.sort=this.sort;
  }

  ngOnInit(): void {
    this.ObntenerBeers();
  }

  DeleteBeer(BeerCode:Number){
    this.loading=true;
    this._BeersService.DeleteBeer(BeerCode).subscribe(()=>{
      this.mensajeExito();
      this.loading=false;
    });
  }

  ObntenerBeers(){
    this._BeersService.GetBeers().subscribe(data => {
    console.log(data[0]);
    this.dataSource.data =data;
    console.log(this.dataSource);
    })
  }

  getbeer(){
    this._BeersService.GetBeer(this.id).subscribe(data=>{
    this.Beer=data;
    console.log(this.Beer);
    })
  }

  mensajeExito(){
    this._snackbar.open('Beers clear successfully','',{
      duration:4000,
      horizontalPosition:'left',
    });
  }

 applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter= filterValue.trim().toLowerCase();
  }

  async Alerta ():Promise<number> {
    var cuantity=0;
    await Swal.fire({
      title: 'Cantidad a comprar',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Comprar',
      showLoaderOnConfirm: true,
    })
    .then((result)=>{
      if(result.isConfirmed){
        Swal.fire({
          title:'Buy Beer Succefull',
          text:`buy ${result.value}  Beers`,
        })
        cuantity= result.value;
      }})    
    return cuantity;

  }


  async BuyBeer(beercode:number){
    try{ 
      var cuantity =await this.Alerta()  
      if (cuantity.valueOf()){
        const buyBeer: BuyBeer ={
          BeerCode:beercode,
          Cuantity: cuantity.toString()
        }
        this._BeersService.BuyBeer(buyBeer).subscribe(data=>{

        });
      }
      else{
        Swal.fire({
          title:'Error',
          text:'Need cuantity of buy beers',
          showCloseButton:true
        })
        console.log('Need beer to buy');
      }
      }
    catch(Ex){
        console.log(Ex);
    }
  }
   


}
