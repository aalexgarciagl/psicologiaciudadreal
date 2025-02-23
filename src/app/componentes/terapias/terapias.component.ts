import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terapias',
  imports: [],
  templateUrl: './terapias.component.html',
  styleUrl: './terapias.component.css'
})
export class TerapiasComponent {


  constructor(private titleService: Title) {
    this.titleService.setTitle('Terapias Efectivas para Ansiedad, Depresión y Autoestima | Psicóloga en Ciudad Real');
  }
}
