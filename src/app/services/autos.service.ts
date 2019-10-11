import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  token:any = {};
  vehicles:any = {};

  constructor(private http: HttpClient) {}
  getAll(){
    return this.http.get("http://34.231.146.47:3000/api/auth/pruebas@terantbwa.com.mx/Vpz6zPv:i!35LDs")
    .pipe(map( data => data));
  }
  getAutos(token: any){
    return this.http.get(`http://34.231.146.47:3000/api/vehicles/?token=${token.token}`)
    .pipe(map( data => data));
  }
}
