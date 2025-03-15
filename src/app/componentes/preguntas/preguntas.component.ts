import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';
import { TelefonoButtonComponent } from '../../telefono-button/telefono-button.component';

@Component({
  selector: 'app-preguntas',
  imports: [WhatsappButtonComponent, TelefonoButtonComponent],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent implements OnInit {


  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
    this.telNormal = "656 91 31 16"
  }

  whatsappLink = 'https://wa.me/656913116'
  constructor(private titleService: Title) {
    this.titleService.setTitle('¿Cómo Funciona la Terapia? Preguntas Frecuentes | Psicóloga en Ciudad Real');
  }
  telNormal:any
  email:any

  checkSize(){
    return window.screen.width
  }
}
