import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { UsApiService } from '../service/us-api.service';
import { Key, Command } from 'protractor';
import { Router } from '@angular/router';
//import { stringify } from 'querystring';
//nuevo
import { UserInterface } from "../model/user-interface"; 






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  //nuevo
  private user: UserInterface={
    name: '',
    pass: ''
  };
  //

  loginForm: FormGroup;

  

  constructor(private usApiService: UsApiService, private fb:FormBuilder){    
  }

  usuarioLogueado = false;
  ngOnInit(){
      this.usApiService.getUsuarios().then(console.log);
      this.onLogin();
      
  }
   

   onLogin(){
     this.loginForm=this.fb.group({
        name: this.userFormControl,
        pass: this.passFormControl
     })     
    }
      
   userLogin(){
     return this.usApiService
     .loginuser(this.user.name, this.user.pass)
     .subscribe(
       data => {
         this.usApiService.setUser(data.user) 
         let token = data.id;
         this.usApiService.setToken(token)
        // console.log(data)
       },
       error => console.log(error)
     )
   }

  //Muestra por consola los datos ingresados en el formulario
   prueba(){
    console.log('loginForm' , this.loginForm.value);
    
    
    
    //console.log('Saved',this.loginForm.value);//falla
    //console.log('Saved',this.userFormControl.value,'Saved', this.passFormControl.value);//funca
   }

   
   userFormControl = new FormControl('', [
    Validators.required,
    Validators.email,    
  ]);

   passFormControl = new FormControl('', [
   Validators.required,
   Validators.minLength(3)
   ]);

  
  
 
}

