import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent{
  token:any = {};
  vehicles:any = {};
  constructor(private autos: AutosService,private http: HttpClient, private router: Router) {
    this.getAll();
  }
  getAll(){
    this.autos.getAll().subscribe((response: any)=>{
      this.getAutos(response);
    });
  }
  getAutos(response:any){
    this.vehicles = this.autos.getAutos(response).subscribe((response: any)=>{
      this.vehicles = response;
    });
  }
  showVehicle(id:any){
    this.router.navigate(['/auto',id]);
  }
}