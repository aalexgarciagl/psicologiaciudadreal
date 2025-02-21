import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incio',
  imports: [],
  templateUrl: './incio.component.html',
  styleUrl: './incio.component.css'
})
export class IncioComponent implements OnInit {
  title = "Psicología en Ciudad Real | Servicios de terapia y bienestar emocional"


  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
    this.telFijo = "926 232 743"
    this.telNormal = "656 91 31 16"
  }

  telFijo: any
  telNormal: any
  email: any
}
