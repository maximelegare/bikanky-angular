import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({ easing: 'ease-in-out-back', startEvent:'load' });
  }

}
