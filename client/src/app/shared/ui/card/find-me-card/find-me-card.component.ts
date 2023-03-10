import { Component, OnInit, Input } from '@angular/core';
import { FindMeLocations } from 'src/app/shared/context/other-cards/other-cards.model';
import { FormatString } from 'src/app/shared/services/utils/format-string.service';
@Component({
  selector: 'app-find-me-card',
  templateUrl: './find-me-card.component.html',
  styleUrls: ['./find-me-card.component.css'],
})
export class FindMeCardComponent implements OnInit {
  constructor(public formatString:FormatString) {}

  @Input() location: FindMeLocations;



  ngOnInit(): void {}
}
