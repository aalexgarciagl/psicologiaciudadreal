import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Psicología en Ciudad Real | Servicios de terapia y bienestar emocional';
  telFijo: any
  telNormal: any
  email: any

  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
    this.telFijo = "926 232 743"
    this.telNormal = "656 91 31 16"
  }

  constructor(private router: Router){}


  goTratamientos(){
    this.router.navigate(['/tratamientos'])
  }

  goInicio(){
    this.router.navigate(['/inicio'])
  }

  goPreguntas(){
    this.router.navigate(['/preguntas'])
  }

  goTerapias(){
    this.router.navigate(['/terapias'])
  }

  goContacto(){
    this.router.navigate(['/contacto'])
  }

  checkRoute(){
    return this.router.url; 
  }
}
