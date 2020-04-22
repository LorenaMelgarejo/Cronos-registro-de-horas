import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { UsApiService } from '../service/us-api.service';
import { Key, Command } from 'protractor';
import { Router } from '@angular/router';
import { UserInterface } from "../model/user-interface"; 
import { isError } from 'util';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  private user: UserInterface={
    usuario: '',
    clave: ''
  };

  loginForm: FormGroup;

   public isError = false;


  constructor(private usApiService: UsApiService, private fb:FormBuilder, private router: Router){    
  }

  usuarioLogueado = false;
  
  ngOnInit(){
      //this.usApiService.getUsuarios().then(console.log);
     // this.onLogin();
     this.userLogin();
      //this.enviarLogin();
  }


  // enviarLogin() {

  //   let usuario = {  
      
  //     'usuario': this.userFormControl,  //userFormControl.value,
  //     'clave': this.passFormControl                    //passFormControl.value     
  //   }
  //   console.log(usuario);
    
  //    this.usApiService.login(usuario).then(res => {
  //    this.router.navigate(['fichadasRRHH']);
    
  //  }).catch(err => {
  
  //      console.log("error capturado: " + err.error);
  //   });

  
  // }
   
      
  //  userLogin(){

  //      this.loginForm = this.fb.group({
  //      usuario: this.userFormControl,
  //      clave: this.passFormControl,
  // //     //log: this.logFormControl     
  //      })
  
  //    if(this.loginForm.valid){
  //    return this.usApiService
  //    .loginuser(this.user.usuario, this.user.clave)
  //    .subscribe(
  //         data => {
         
  //          this.usApiService.setUser(data.user); 
  //          //let token = data.id;
  //          const token = data.id;
  //          this.usApiService.setToken(token);
  //          this.router.navigate(['/fichadaRRHH']);
  //          location.reload();
  //          this.isError = false;
  //         // console.log(data)
  //       },
  //       error => this.onIsError()
  //       );
  //       //console.log(error)
  //      } else {
  //        this.onIsError();
  //      }
  //      //this.router.navigate(['fichadaRRHH'])
  //     }
      
    
  //    onIsError(): void {
  //     this.isError = true;
  //    setTimeout(() => {
  //       this.isError = false;
  //    }, 4000);

  //  }

  userLogin(){
     
    this.loginForm=this.fb.group({
    usuario: this.userFormControl,
    clave: this.passFormControl,
    //log: this.logFormControl     
    })

   if(this.loginForm.valid){
   return this.usApiService
   .loginuser(this.user.usuario, this.user.clave)
   .subscribe(data => {
     this.usApiService.login(this.userLogin).then(res => {
     this.router.navigate(['fichadasRRHH']);
  
     }).catch(err => {

      console.log("error capturado: " + err.error);
   });
   });//cierra susc.

  } //cierra if
} //cierra login


  //Muestra por consola los datos ingresados en el formulario
   prueba(){
    console.log('loginForm' , this.loginForm.value);   
    console.log('Saved',this.userFormControl.value,'Saved', this.passFormControl.value);//funciona
   }

   //valida los campos de name y pass
   userFormControl = new FormControl('', [
    Validators.required,
    Validators.email,    
  ]);

   passFormControl = new FormControl('', [
   Validators.required,
   ]);

   fichadas(){ 
    this.router.navigate(['fichadaRRHH'])
   }
  
}

