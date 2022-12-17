import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido','acciones'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  estado:any = ''
  valor:any=''
  constructor(public servicios: ConsultaService) {
    this.datosPeronas = new FormGroup({
      cedula:new FormControl(null)
    })
  }
  ngOnInit(): void {
  // this.listar();
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

  listar(){
    let cedula = this.datosPeronas.value

    console.log(cedula)
    this.servicios.getPadron(cedula).subscribe((res:any)=>{
        this.votantes = res
        if(this.votantes.length>0){
          this.estado = this.votantes[0].estado
          this.dataSource = new MatTableDataSource(this.votantes)
        }else{
          this.votantes=''
          this.dataSource = new MatTableDataSource(this.votantes)
        }


  //       this.dataSource = this.persona

      },
      err=> console.log(err)
    )
  }
  voto(){
    let cedula = this.datosPeronas.value
    console.log(cedula)
    this.servicios.putPadron(cedula).subscribe((res:any)=>{
        this.votantes = res
        this.estado = this.votantes[0].estado
        console.log(this.estado)
    // this.dataSource = new MatTableDataSource(this.votantes)


      },
      err=> console.log(err)
    )
  }
  control(){
    if(this.estado==1){
      this.valor = "YA VOTO"
    }else{
      this.valor= "NO VOTO"
    }
    return this.valor
  }
  simulador(url:string){
    window.open(url,"_blank")
    this.consultar();
  }
}
