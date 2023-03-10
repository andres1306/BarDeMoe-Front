import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Beers, } from '../interface/beers';
import { BuyBeer } from '../interface/BuyBeers';
import { ReportSales } from '../interface/ReportSales';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  //Variables para definir la rota a la cual se le aran peticiones
    //Variable de conexion al back
  private MyAppurl: string  = environment.endpoint;
    //Variable de link de petición
  private  MyApiurl: string  = 'api/Beers/';
  private  MyApiSales:string='api/SalesReport';

  constructor( private http:HttpClient) {}

  GetBeers():Observable<Beers[]>{
    //Cadena de union entre la rota del back y el link de peticiones 
   //return this.http.get(`${this.MyAppurl}${this.MyApiurl}`);
   return this.http.get<Beers[]>(this.MyAppurl + this.MyApiurl);
   }

   GetBeer(BeerCode:Number):Observable<Beers>{
    return this.http.get<Beers>(this.MyAppurl+this.MyApiurl+BeerCode);
   }
   
   DeleteBeer(BeerCode :Number): Observable<void>{
    return this.http.delete<void>(this.MyAppurl+this.MyApiurl+BeerCode);
   }

   BuyBeer(buybeer:BuyBeer):Observable<BuyBeer>{
    return this.http.post<BuyBeer>(this.MyAppurl+this.MyApiurl, buybeer);
   }
   
   ReportSales():Observable<ReportSales[]>{
      return this.http.get<ReportSales[]>(this.MyAppurl+this.MyApiSales);
   }


}
