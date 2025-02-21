import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamientos',
  imports: [],
  templateUrl: './tratamientos.component.html',
  styleUrl: './tratamientos.component.css'
})
export class TratamientosComponent implements OnInit {


  ngOnInit(): void {
    this.email = "psicologiamjgcastro@gmail.com"
    this.telFijo = "926 232 743"
    this.telNormal = "656 91 31 16"
  }

  

  telFijo: any
  telNormal: any
  email: any
}
