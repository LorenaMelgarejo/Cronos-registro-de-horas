import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { Observable } from 'rxjs';
//nuevo
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { UserInterface } from "../model/user-interface"; 





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
    
 //nuevo
    loginuser(name: string, pass: string):Observable<any>{
      const url_api ="http://localhost:3000/usuarios";
      return this.http.post<UserInterface>(url_api,{name,pass}).pipe(map(data => data));
    } 


    setUser(user: UserInterface): void {
      let user_string = JSON.stringify(user);
      localStorage.setItem("currentUser", user_string);
    }
  
    
    setToken(token):void {
      localStorage.setItem("accessToken",token);

    }
    
    getToken(){
      return localStorage.getItem("accessToken");
    }

    getCurrentUser(): UserInterface{
      let user_string = localStorage.getItem("currentUser");
      if(isNullOrUndefined(user_string)){
        let user: UserInterface =JSON.parse(user_string);
        return user;
      }
      else{
        return null;
      }
    }
  
}
