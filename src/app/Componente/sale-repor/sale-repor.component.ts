import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BeersService } from 'src/app/service/beers.service';
import { ReportSales } from 'src/app/interface/ReportSales';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { ListarBeersComponent } from '../listar-beers/listar-beers.component';

@Component({
  selector: 'app-sale-repor',
  templateUrl: './sale-repor.component.html',
  styleUrls: ['./sale-repor.component.css']
})
export class SaleReporComponent implements OnInit {
  displayedColumns:string[]=['BeerCode','Name','QuantitySell','ToltalPrice','Accions'];
  dataSource =new MatTableDataSource<ReportSales>();
  ReporSales!:FormGroup;
  loading=false;

  @ViewChild(MatPaginator)pagineitor! :MatPaginator;
  @ViewChild(MatSort)sort!:MatSort;

  constructor( private _BerSevice:BeersService) 
  {}

  ngOnInit(): void {
    this.GetRepotSales();
  }
  ngAfterViewInit():void{
   this.dataSource.paginator=this.pagineitor;
  }

  GetRepotSales (){
    this._BerSevice.ReportSales().subscribe(Data=>{
      this.dataSource.data =Data;
      console.log(this.dataSource);
    });
  }

}
