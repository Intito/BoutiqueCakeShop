import { Component } from '@angular/core';
import { Factura } from './factura';

@Component({
  selector: 'app-facturas-list',
  standalone: false,
  templateUrl: './facturas-list.html',
  styleUrl: './facturas-list.scss'
})
export class FacturasList {
  brownie: Factura = {
              name:  "Brownie",
              ingredients:  "Harina Integral, Manteca, Azucar",
              price:  1000,
              stock:  200,
              image: "img/brownie.png"
  }
}
