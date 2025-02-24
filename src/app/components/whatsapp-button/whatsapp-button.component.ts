import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {
  isChatOpen = false;
  whatsappLink = 'https://wa.me/656913116'; // Reemplaza con tu número de WhatsApp

  

  toggleChat() {
    window.open(this.whatsappLink, '_blank')
  }
}
