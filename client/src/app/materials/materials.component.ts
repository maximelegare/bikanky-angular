import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { Store } from '@ngxs/store';
import { FetchMaterialsCategories } from '../shared/context/materials/materials.actions';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MaterialsCategoriesState } from '../shared/context/materials/materials.state';
import { MaterialsCategory } from '../shared/context/materials/materials.model';


@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor(private store:Store) { }
  @Select(MaterialsCategoriesState.getMaterialCategories) materialsCategories$:Observable<MaterialsCategory[]>

  ngOnInit(): void {
    AOS.init({ easing: 'ease-in-out-back', startEvent:'load' });
    this.store.dispatch(new FetchMaterialsCategories())


  }
}
