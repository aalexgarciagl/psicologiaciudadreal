import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';
import { TelefonoButtonComponent } from '../../telefono-button/telefono-button.component';

@Component({
  selector: 'app-terapias',
  imports: [WhatsappButtonComponent, TelefonoButtonComponent],
  templateUrl: './terapias.component.html',
  styleUrl: './terapias.component.css'
})
export class TerapiasComponent {

  telNormal: any
  
  whatsappLink = 'https://wa.me/656913116'
  constructor(private titleService: Title) {
    //this.titleService.setTitle('Terapias Efectivas para Ansiedad, Depresión y Autoestima | Psicóloga en Ciudad Real');
    this.titleService.setTitle('Terapias');
    this.telNormal = "656 91 31 16"
  }
}
