import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css'],
})
export class PreciosComponent implements OnInit {
  title = 'TareaColores';

  public Color: string;

  constructor() {
    this.Color = 'purple';
  }

  ngOnInit(): void {}
  Mostrar() {
    alert(this.Color);
  }
}
