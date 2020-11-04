import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosIdx, Productos } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productosIdx: ProductosIdx[] = [];
  productoFiltrado: ProductosIdx[] = [];
  cargandoIdx = true;

  constructor( private http: HttpClient ) {
    this.getProductosIdx();
  }

  getProductosIdx(){
    return new Promise((resolve, reject) => {
          this.http.get('https://mariosportfolio.firebaseio.com/productos_idx.json')
        .subscribe( (resp: ProductosIdx[]) => {
          this.productosIdx = resp;
          this.cargandoIdx = false;
          resolve();
        });
    });

  }

  getProducto(cod: string){
    return this.http.get(`https://mariosportfolio.firebaseio.com/productos/${cod}.json`);
  }

  buscarProductos( termino: string ) {

    if(this.productosIdx.length === 0){

      this.getProductosIdx().then( () => {

        this.filtrarProductos(termino);

      });

    }else{

      this.filtrarProductos(termino);

    }

    console.log(this.productoFiltrado);
  }

  private filtrarProductos(termino: string){
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase()
    this.productosIdx.forEach( prod => {
      if((prod.categoria.toLocaleLowerCase().indexOf( termino ) >= 0)
            || (prod.titulo.toLocaleLowerCase().indexOf( termino ) >= 0)){
        this.productoFiltrado.push(prod);
      }
    });
  }
}
