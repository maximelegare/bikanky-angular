import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-icons',
  templateUrl: './media-icons.component.html',
  styleUrls: ['./media-icons.component.css']
})




export class MediaIconsComponent implements OnInit {

  constructor() { }

  @Input() mediaIcons:{
    mediaLink:string;
    mediaName:string
  }[]

  ngOnInit(): void {
  }
  getIcon(icon:string):string{
    return `../../../../assets/svg/SVG/${icon}.svg`}


}
