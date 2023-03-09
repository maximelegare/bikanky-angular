import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { StylismServicesState } from 'src/app/shared/context/stylism/stylism.state';
import { Observable } from 'rxjs';
import { StylismService } from 'src/app/shared/context/stylism/stylism.model';
import { GeneralState } from 'src/app/shared/context/general/general.state';

@Component({
  selector: 'app-stylism-section',
  templateUrl: './stylism-section.component.html',
  styleUrls: ['./stylism-section.component.css'],
})
export class StylismSectionComponent implements OnInit {
  constructor() {}

  @Select(GeneralState.getLang) lang$:Observable<string>
  @Select(StylismServicesState.getStylismServices) stylismServices$: Observable<
    StylismService[]
  >;
  ngOnInit(): void {
    this.stylismServices$.subscribe((val) => {
      console.log(val)
    })


  }
}
