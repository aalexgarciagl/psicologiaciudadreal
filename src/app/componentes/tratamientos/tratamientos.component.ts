import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';


@Component({
  selector: 'app-tratamientos',
  imports: [WhatsappButtonComponent],
  templateUrl: './tratamientos.component.html',
  styleUrl: './tratamientos.component.css'
})
export class TratamientosComponent implements OnInit {


  constructor(private titleService: Title) {
    this.titleService.setTitle('Tratamientos Psicológicos en Ciudad Real | Especialista en Ansiedad y Bienestar');
  }


  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
    this.telFijo = "926 232 743"
    this.telNormal = "656 913 116"
  }

  whatsappLink = 'https://wa.me/656913116'
  

  telFijo: any
  telNormal: any
  email: any
}
