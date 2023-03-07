import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { OtherCardsState } from 'src/app/shared/context/other-cards/other-cards.state';
import { Observable } from 'rxjs';
import { FindMeLocations } from 'src/app/shared/context/other-cards/other-cards.model';

@Component({
  selector: 'app-find-me-section',
  templateUrl: './find-me-section.component.html',
  styleUrls: ['./find-me-section.component.css'],
})
export class FindMeSectionComponent implements OnInit {
  constructor() {}
  @Select(OtherCardsState.getFindMeLocations) findMeLocations$: Observable<
  FindMeLocations[]
  >;

 
  ngOnInit(): void {
   
  }
}
