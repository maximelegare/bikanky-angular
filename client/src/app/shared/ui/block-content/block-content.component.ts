import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { GeneralState } from '../../context/general/general.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-block-content',
  templateUrl: './block-content.component.html',
  styleUrls: ['./block-content.component.css'],
})
export class BlockContentComponent implements OnInit {
  constructor() {}
  @Input() data: any;
  @Input() objectKey:string

  ngOnInit(): void {
    this.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  getLineStyle(size){
    switch (size){

      case "h5" :{
        return 'text-base font-semibold'
      }
      case "h4" :{
        return 'text-lg font-semibold'
      }
      default:{
        return 'text-sm'
      }
    }  

  }
  @Select(GeneralState.getLang) lang$: Observable<string>;
  lang = '';
}
