import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-preguntas',
  imports: [WhatsappButtonComponent],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent implements OnInit {


  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('¿Cómo Funciona la Terapia? Preguntas Frecuentes | Psicóloga en Ciudad Real');
  }

  email:any
}
