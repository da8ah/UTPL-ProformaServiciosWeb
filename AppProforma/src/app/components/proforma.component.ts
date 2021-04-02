import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'proforma-component',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.css']
})
export class ProformaComponent implements OnInit {

  public respuestas = [];
  total: number = 0;

  /* PROFORMA */
  public objProforma = [
    {
      categoria: "Servicio de Hosting",
      descripcion: "Almacenamiento Web",
      planes: ["Seleccionar...", "Personal (500MB) $2.99/mes", "Compartido (1000MB) $12.99/mes", "PYMES (3000MB) 19.99", "Empresarial (10GB) $49.99/mes"],
      precios: [0, 2.99, 12.99, 19.99, 49.99]
    },
    {
      categoria: "Dominios y Subdominios",
      descripcion: "Registro de Dominio",
      planes: ["Seleccionar...", "Dominios (personal): .da8ah $2.99/año", "Dominios: .com $9.99/año", "Dominios: .org .edu $19.99/año", "Dominios: .gob .net .med $29.99/año", "Dominios (territoriales): .ec $39.99/año"],
      precios: [0, 2.99, 9.99, 19.99, 29.99, 39.99]
    },
    {
      categoria: "Correo Electrónico",
      descripcion: "Cuentas de Correo",
      planes: ["Seleccionar...", "Cuenta Básica (25GB/cuenta) $3.99/mes", "Cuenta Profesional (50GB/cuenta) $5.99/mes", "Cuenta Empresarial (100GB/cuenta) $9.99/mes"],
      precios: [0, 3.99, 5.99, 9.99]
    },
    {
      categoria: "Copia de Seguridad",
      descripcion: "Seguridad y Respaldo",
      planes: ["Seleccionar...", "Básico (40GB) $2.99/mes", "Pro (100GB) $5.99/mes", "Premium (500GB) $9.99/mes"],
      precios: [0, 2.99, 5.99, 9.99]
    }
  ];

  constructor() {
    let title: String = 'Proforma';
    this.objProforma.forEach(servicio => {
      this.respuestas.push(0);
    });
  }

  ngOnInit() { }

  calcularTotal() {
    var sumatoriaTotal = 0;
    var contador = 0;
    this.objProforma.forEach(servicio => {
      sumatoriaTotal += servicio.precios[this.respuestas[contador]];
      contador++;
    });
    this.total = sumatoriaTotal;
  }

  guardar() {
    alert("¡Datos Guardados!");
  }

}