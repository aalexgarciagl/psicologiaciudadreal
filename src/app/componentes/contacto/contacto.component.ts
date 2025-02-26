import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-contacto',
  imports: [WhatsappButtonComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  whatsappLink = 'https://wa.me/656913116'
  telFijo: any
  telNormal: any
  email: any

  constructor(private titleService: Title) {
    this.titleService.setTitle('Contacto, Ubicación y Cómo Llegar | Psicóloga en Ciudad Real');
  }

  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
    this.telFijo = "926 232 743"
    this.telNormal = "656 913 116"
  }

  obtenerTamanio(){
    return window.screen.width
  }
}
