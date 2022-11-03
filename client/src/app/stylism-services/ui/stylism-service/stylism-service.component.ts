import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { StylismService } from 'src/app/shared/context/stylism/stylism.model';

@Component({
  selector: 'app-stylism-service',
  templateUrl: './stylism-service.component.html',
  styleUrls: ['./stylism-service.component.css']
})
export class StylismServiceComponent implements OnInit {

  constructor() { }
  @Input() service:StylismService

  ngOnInit(): void {
    console.log(this.service)
  }

}
