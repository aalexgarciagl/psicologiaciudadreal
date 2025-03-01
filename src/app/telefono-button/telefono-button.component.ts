import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-telefono-button',
  imports: [NgClass],
  templateUrl: './telefono-button.component.html',
  styleUrl: './telefono-button.component.css'
})
export class TelefonoButtonComponent {

  showButton = false; 

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY;

    // Si el desplazamiento es mayor a 200px, mostramos el botón
    if (scrollPosition > 200) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  
}
