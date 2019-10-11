import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {
  token:any = {};
  vehicles:any = {};
  vehicle:any = {};
  autoId:number;

  constructor(private autos: AutosService,private router: ActivatedRoute, private http: HttpClient) {
    this.getAll();
    this.router.params.subscribe(params=>{
      this.autoId = params['id'];
    });
  }
  getAll(){
    this.autos.getAll().subscribe((response: any)=>{
      this.getAutos(response);
    });
  }
  getAutos(response:any){
    this.vehicles = this.autos.getAutos(response).subscribe((response: any)=>{
      this.vehicles = response;
      console.log(response);
    });
  }
}
