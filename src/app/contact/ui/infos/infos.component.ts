import { Component, OnInit, Input } from '@angular/core';
import { ContactData } from 'src/app/shared/context/contact/contact.model';
@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  constructor() { }
  @Input() contactData:ContactData
     

  getIcon(icon:string):string{
    
    
    return `../../../../assets/svg/SVG/${icon}.svg`}
  
  ngOnInit(): void {
  }

}
