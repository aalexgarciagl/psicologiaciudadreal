import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  imports: [],
  templateUrl: './aviso-legal.component.html',
  styleUrl: './aviso-legal.component.css'
})
export class AvisoLegalComponent implements OnInit {
  email = "psicologiamjgcastro@gmail.com"

  ngOnInit(): void {
    window.scrollTo(0,0); 
  }
}
