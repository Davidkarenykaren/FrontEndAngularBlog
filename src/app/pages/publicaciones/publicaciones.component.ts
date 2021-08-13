import { Component, OnInit } from '@angular/core';
import { PublicacionService } from './services/publicacion.service';
import { tap } from 'rxjs/operators';
import { Publicacion } from './interfaces/publicacion.interface';


import {UtilService} from '../../shared/services/util.service';



@Component({
  selector: 'app-publicaciones',
  templateUrl: `./publicaciones.component.html`,
  styleUrls: ['./publicaciones.component.scss']
})


export class PublicacionesComponent implements OnInit {



  publicaciones: Publicacion[];

  publicacion = {
    titulo: '',
    contenido: '',
    urlImagen: '',
    email: ''
  }

 constructor(private publicacionSvc: PublicacionService, private util: UtilService) { }




  ngOnInit(): void {
    this.obtenerPublicaciones();
    console.log(this.publicaciones);
  }

  obtenerPublicaciones(){
    this.publicacionSvc.obtenerPublicaciones()
    .pipe(
      tap((publicaciones: Publicacion[]) => this.publicaciones = publicaciones)
    )
    .subscribe();
  }

  onSubmit(){
    console.log(this.publicacion);
    this.publicacionSvc.agregarPublicacion(this.publicacion).subscribe((data: any) => {
      this.obtenerPublicaciones();
      let alert_dialog = this.util.openDialog({
        status: 'success',
        spinner: false,
        title: '¡Hecho!',
        message: `Publicación agregada con exito!`,
      });
    });
  }


}
