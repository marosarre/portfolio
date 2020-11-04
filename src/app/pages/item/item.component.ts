import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/info-pagina.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: Productos;
  cargando = true;
  cod: string;
  constructor( public service: ProductosService,
               private router: ActivatedRoute) {
                this.router.params.subscribe( params => this.cod = params['id']);
                this.service.getProducto(this.cod).subscribe( (resp: Productos) => {
                  this.producto = resp;
                  this.cargando = false;
                });
              }

  ngOnInit(): void { }

}
