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
    private route : Router
    ) {}

  ngOnInit() {

    //return this.logApiService.getFichadas();
   this.logApiService.getFichadas().then(console.log);
   
  }

}
