import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { StylismService } from 'src/app/shared/context/stylism/stylism.model';
import { Select } from '@ngxs/store';
import { GeneralState } from 'src/app/shared/context/general/general.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-stylism-service',
  templateUrl: './stylism-service.component.html',
  styleUrls: ['./stylism-service.component.css'],
})
export class StylismServiceComponent implements OnInit {
  constructor() {}
  @Input() service: StylismService;

  @Select(GeneralState.getLang) lang$: Observable<string>;

  lang = '';
  ngOnInit(): void {
    this.lang$.subscribe((val) => this.lang = val);
  }
}
