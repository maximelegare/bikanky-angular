import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MaterialsCategory } from 'src/app/shared/context/materials/materials.model';
import { GeneralState } from 'src/app/shared/context/general/general.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { FormatString } from 'src/app/shared/services/utils/format-string.service';

@Component({
  selector: 'app-material-section',
  templateUrl: './material-section.component.html',
  styleUrls: ['./material-section.component.css'],
})
export class MaterialSectionComponent implements OnInit {
  @Select(GeneralState.getLang) lang$: Observable<string>;

  constructor(public formatString:FormatString) {}
  @Input() materialsCategory: MaterialsCategory;

  ngOnInit(): void {}
}
