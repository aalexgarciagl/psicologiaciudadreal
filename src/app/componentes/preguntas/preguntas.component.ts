import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  imports: [],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent implements OnInit {


  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
  }

  email:any
}
