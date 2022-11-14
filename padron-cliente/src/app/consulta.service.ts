import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ControlService } from './control.service';

interface votante{
  cedula:string
}

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private  http: HttpClient, private rutas:ControlService) {}
    getPadron(cedula){
      return this.http.post(`${this.rutas.API_URI}/votante/listar/`,cedula);
    }
}
