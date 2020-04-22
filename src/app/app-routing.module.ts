import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
//import { HeaderComponent } from './header/header.component';
import { UsuarioComponent} from './usuario/usuario.component';



const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'fichadasRRHH', component:UsuarioComponent}
    
    
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }