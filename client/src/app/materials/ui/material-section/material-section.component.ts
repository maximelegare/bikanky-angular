import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MaterialsCategory } from 'src/app/shared/context/materials/materials.model';
import { GeneralState } from 'src/app/shared/context/general/general.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-material-section',
  templateUrl: './material-section.component.html',
  styleUrls: ['./material-section.component.css'],
})
export class MaterialSectionComponent implements OnInit {
  @Select(GeneralState.getLang) lang$: Observable<string>;

  constructor() {}
  @Input() materialsCategory: MaterialsCategory;

  ngOnInit(): void {}
}
