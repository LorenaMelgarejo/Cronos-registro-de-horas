import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { UserInterface } from "../model/user-interface"; 





@Injectable({
  providedIn: 'root'
})

export class UsApiService {
  
  ServerUrl = 'http://localhost:3000/login';  
  ServerFichada = 'http://localhost:3000/fichadasRRHH' ;
  
  private token: string;
  
  constructor(private http: HttpClient) { }



  public post<T>(api: string, body: any) {
    return this.http.post<T>(this.ServerUrl + api, body);
  }
  
  public login(datos: any): Promise<any> {
    return this.post<any>('/login', datos).toPromise().then(res => {
      this.token = res.token;
      localStorage.setItem('token', res.token);
      return res;
    }).catch(err =>{
      console.log("error en login: ",err );
      
    });
  }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.getToken()
  });
 
   getUsuarios() {
    return this.http.get(this.ServerUrl).toPromise();
   }
  

   // getFichadas() {
      //return this.http.get(this.ServerFichada).toPromise();
      
    //}
    
 
    loginuser(usuario: string, clave: string):Observable<any>{
      const url_api ="http://localhost:3000/login";
      return this.http.post<UserInterface>(
        url_api,
        {usuario,clave},
        {headers: this.headers})
        .pipe(map(data => data));
    } 

   
    setUser(user: UserInterface): void {
      let user_string = JSON.stringify(user);
      localStorage.setItem("currentUser", user_string);
    }
  
   // guarda en el localhost el usuario 
    setToken(token):void {
      localStorage.setItem("accessToken",token);
    }
   
    
    // recupera el token
    getToken(){
      return localStorage.getItem("accessToken");
    }
  
  
    //nos informa que usuario esta logueado en ese momento
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


    getFichadas() {
      const token = this.getToken();
      const url_fich = 'http://localhost:3000/fichadasRRHH';
      return this.http.get(url_fich,{headers:this.headers});
    }

    

  
}
