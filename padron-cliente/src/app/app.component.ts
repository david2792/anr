import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ConsultaService } from './consulta.service';
interface votante{
  codigo:string,
  nombre:string,
  apellido:string,
  cedula:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  datosPeronas: FormGroup;
  votantes: any=[];
  displayedColumns: string[] = ['codigo','cedula', 'nombre', 'apellido'];
  dataSource: MatTableDataSource<any>;
  constructor(public servicios: ConsultaService) {
    this.datosPeronas = new FormGroup({
      cedula:new FormControl(null)
    })
  }
  ngOnInit(): void {
 //   this.listar();
  }
  consultar(){
    let cedula = this.datosPeronas.value
    this.servicios.getPadron(cedula).subscribe((res:any)=>{

      this.votantes = res
      console.log(this.votantes[0].nombre)
    },
    err=> console.log(err)
  )
  }

  simulador(url:string){
    window.open(url,"_blank")
    this.consultar();
  }
}
