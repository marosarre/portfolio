import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina, InfoPersonal } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  infoCargada = false;
  equipo: InfoPersonal[] = [];
  equipoCargado = false;

  constructor( private http: HttpClient) {

   // Leer y cargar el archivo data-pagina
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
         // console.log(resp);
          this.info = resp;
          this.infoCargada = true;
        });
  }

  private cargarEquipo(){
    this.http.get('https://mariosportfolio.firebaseio.com/equipo.json')
        .subscribe( (resp: InfoPersonal[]) => {
          // console.log(resp);
          this.equipo = resp;
          this.equipoCargado = true;
        });
  }
}
