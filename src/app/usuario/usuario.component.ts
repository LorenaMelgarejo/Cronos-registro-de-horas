import { Component, OnInit } from '@angular/core';
import { UsApiService } from '../service/us-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private logApiService: UsApiService,
    private router : Router,
   ) {}

   //public islogged =false;

  ngOnInit() {

    //this.onCheckLogin();

    //return this.logApiService.getFichadas();
   //this.logApiService.getFichadas().then(console.log);
    //return this.logApiService.ServerFichada;
   
  }

  //nuevo
  getListFich(): void {
    this.logApiService
      .getFichadas()
      
  }

  //  onCheckLogin():void{
  //    if(this.logApiService.loginuser === null){
  //      this.islogged = false;
  //    }else {
  //      this.islogged= true;
    
  //      //this.router.navigate(['fichadaRRHH'])
  //    }

   //}

  // constructor(private http: HttpClient) { }
 
  // getUsuarios() {
  //  return this.http.get(this.ServerUrl).toPromise();
  // }

  

}
