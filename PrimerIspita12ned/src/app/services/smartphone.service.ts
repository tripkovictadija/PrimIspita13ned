import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Smartphone } from '../models/smartphone';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  public baseUrl = "http://it255.glitch.me/smartphones";

  constructor(private _httpClient: HttpClient ) { }

public getSmartphones(): Observable<Smartphone[]> {
  return this._httpClient.get<Smartphone[]>(this.baseUrl).pipe(
    map((data: any[]) => data.map((item:any) => this._createSmartphoneFromObject(item)))
  );
  }

public getSmartphone(id: number): Observable<Smartphone>{
return this._httpClient.get<Smartphone>(this.baseUrl+'/'+id).pipe(
  map((data:any) => this._createSmartphoneFromObject(data))
);
}

public deleteSmartphone(id: number): Observable<Smartphone>{
return this._httpClient.delete(this.baseUrl+'/'+id).pipe(
  map((data:any) => this._createSmartphoneFromObject(data))
);
}

public createSmartphone(smartphone: Smartphone): Observable<Smartphone>{
 return this._httpClient.post(this.baseUrl, smartphone).pipe(
  map((data:any) => this._createSmartphoneFromObject(data))
 );

}


  _createSmartphoneFromObject(item: any): any {
   return new Smartphone(item.id, item.brend, item.model, item.image, item.video);
  }

}
