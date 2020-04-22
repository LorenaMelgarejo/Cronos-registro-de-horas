import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesingModule } from './login/material-desing/material-desing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


// Service
import { UsApiService } from './service/us-api.service';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'fichadaRRHH', component: UsuarioComponent }
  

];

@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    UsuarioComponent
    /*FormFieldExampleComponent*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MaterialDesingModule,  /*se agrego el archivo material-desing*/
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    
  
  ],
  providers: [UsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
