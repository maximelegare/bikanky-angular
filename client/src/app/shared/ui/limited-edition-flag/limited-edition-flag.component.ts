import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-limited-edition-flag',
  templateUrl: './limited-edition-flag.component.html',
  styleUrls: ['./limited-edition-flag.component.css']
})
export class LimitedEditionFlagComponent implements OnInit {

  constructor() { }
  @Input() isVisible:boolean
  @Input() text: string


  ngOnInit(): void {
  }

}
