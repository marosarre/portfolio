import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosIdx, Productos } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productosIdx: ProductosIdx[] = [];
  cargandoIdx = true;
  productos: Productos[] = [];
  cargandoProductos = true;

  constructor( private http: HttpClient ) {
    this.getProductosIdx();
    this.getProductos();
  }

  getProductosIdx(){
    this.http.get('https://mariosportfolio.firebaseio.com/productos_idx.json')
        .subscribe( (resp: ProductosIdx[]) => {
          this.productosIdx = resp;
          this.cargandoIdx = false;
          console.log(resp);
        });
  }

  getProductos(){
    this.http.get('https://mariosportfolio.firebaseio.com/productos.json')
        .subscribe( (resp: Productos[]) => {
          this.productos = resp;
          this.cargandoProductos = false;
          console.log(resp);
        });
  }
}
