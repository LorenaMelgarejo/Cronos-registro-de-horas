import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})

export class UsApiService {
  
  ServerUrl = 'http://localhost:3000/usuarios';  
  ServerFichada = 'http://localhost:3000/fichadasRRHH' ;
  
  
  constructor(private http: HttpClient) { }
 
   getUsuarios() {
    return this.http.get(this.ServerUrl).toPromise();
   }
  

    getFichadas() {
      return this.http.get(this.ServerFichada).toPromise();
    }
    
    
  
}
