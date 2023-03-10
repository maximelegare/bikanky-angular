import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-icons',
  templateUrl: './media-icon.component.html',
  styleUrls: ['./media-icon.component.css']
})




export class MediaIconsComponent implements OnInit {

  constructor() { }

  @Input() mediaIcon:{
    mediaLink:string;
    mediaName:string
    contact:string
    isSocialMedia:boolean
  }

  ngOnInit(): void {
  }
  getIcon(icon:string):string{
    return `../../../../assets/svg/SVG/${icon}.svg`}
 

}
