import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-incio',
  imports: [WhatsappButtonComponent, ContactoComponent],
  templateUrl: './incio.component.html',
  styleUrl: './incio.component.css'
})
export class IncioComponent implements OnInit {
  title = "Psicología en Ciudad Real | Servicios de terapia y bienestar emocional"
  whatsappLink = 'https://wa.me/656913116'

  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
    this.telFijo = "926 232 743"
    this.telNormal = "656 913 116"
    this.obtenerTamanio()
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('Psicología en Ciudad Real | Servicios de terapia y bienestar emocional');
  }
  

  telFijo: any
  telNormal: any
  email: any

  obtenerTamanio(){
    return window.screen.width
  }
  
}
