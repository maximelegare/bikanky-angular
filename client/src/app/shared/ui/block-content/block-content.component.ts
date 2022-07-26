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

  ngOnInit(): void {
    this.lang$.subscribe((lang) => {
      this.lang = lang;
    });
    console.log(this.data)
  }

  @Select(GeneralState.getLang) lang$: Observable<string>;
  lang = '';
}
