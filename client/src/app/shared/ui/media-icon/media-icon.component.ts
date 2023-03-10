import { Component, OnInit, Input } from '@angular/core';
import { FormatString } from '../../services/utils/format-string.service';
@Component({
  selector: 'app-media-icons',
  templateUrl: './media-icon.component.html',
  styleUrls: ['./media-icon.component.css']
})




export class MediaIconsComponent implements OnInit {

  constructor(public formatString:FormatString) { }

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
